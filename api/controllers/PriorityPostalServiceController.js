/**
 * PriorityPostalServiceController module.
 * @module Controller PriorityPostalService
 */
const HelperService = require("../services/HelperService");
const {findOne} = require("waterline/lib/waterline/MetaModel");
const req = require("express/lib/request");
const sequelize = require('../models/index').sequelize;
const Application = require('../models/index').Application;
const UserDocumentCount = require('../models/index').UserDocumentCount;
const ApplicationPaymentDetails = require('../models/index').ApplicationPaymentDetails;

let priorityPostalServiceController = {

  priorityPostalService: async function (req, res) {
    const userSelection = await Application.findOne({
      where: {
        application_id: req.session.appId
      },
      attributes: ['priority_post']
    });

    const priorityApp = userSelection?.priority_post;

    return res.view('applicationForms/priorityPostalService', {
      application_id:req.session.appId,
      error_report: false,
      form_values: false,
      update: false,
      loggedIn: HelperService.LoggedInStatus(req),
      usersEmail: HelperService.LoggedInUserEmail(req),
      submit_status: req.session.appSubmittedStatus,
      return_to_skip: false,
      user_data: HelperService.getUserData(req,res),
      user_selection: priorityApp
    });
  },

  priorityPostalServiceSelection: async function (req, res) {
    req.session.priorityPostalService = req.body['priority-postal-service-selection'] === 'on';

    await Application.update({
      priority_post: req.session.priorityPostalService
    },{
      where:{application_id:req.session.appId}
    });

    if (!req.session.summary) {
      return res.redirect(
        '/choose-documents-or-skip?pk_campaign=Standard-Service&pk_kwd=Standard'
      );
    } else {
      // todo need to update total price as well
      const selectedDocCount = await UserDocumentCount.findOne({
        where: { application_id: req.session.appId }
      });

      if (selectedDocCount) {
        await UserDocumentCount.update({
          price: selectedDocCount.doc_count * HelperService.getAppPrice(req)
        }, {
          where: { application_id: req.session.appId }
        })
      }

      const appPaymentDetails = await ApplicationPaymentDetails.findOne({
        where: { application_id: req.session.appId }
      })

      if (appPaymentDetails) {
        await ApplicationPaymentDetails.update({
          payment_amount: selectedDocCount.doc_count * HelperService.getAppPrice(req),
          payment_url: null
        }, {
          where: { application_id: req.session.appId }
        })
      }

      return res.redirect('/review-summary');
    }

  },

};

module.exports = priorityPostalServiceController;
