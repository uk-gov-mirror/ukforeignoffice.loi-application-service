const {
    findByLabelText,
    findByRole,
    findByText,
    findAllByTestId,
    findByTestId,
    visit,
    get,
    setCookie,
    go,
    wait,
} = cy;

const eligibilityPages = [
    '1 - Is the e-Apostille accepted in the destination country?',
    '2 - Check if the documents are eligible for the e-Apostille service',
    '3 - Have the PDFs been notarised and digitally signed by a notary?',
];

describe('Check accessiblity', () => {
    function checkA11y(logMsg) {
        if (logMsg) cy.log(logMsg);
        cy.injectAxe();
        cy.checkA11y();
    }

    function acceptSiteCookies() {
        setCookie('cookies_preferences_set', 'true');
        setCookie(
            'cookies_policy',
            '{"essential":true,"settings":true,"usage":true,"campaigns":true}'
        );
    }

    beforeEach(() => {
        acceptSiteCookies();
    });

    afterEach(() => {
        cy.on('fail', () => {
            cy.screenshot();
        });
    });

    describe('Pre login pages', () => {
        beforeEach(() => {
            visit('/');
        });

        it('Choose a service', () => {
            findByRole('button', { name: 'Start now' })
                .should('be.visible')
                .click();
        });
    });

describe('Standard journey happy path', () => {
        function uploadTestFile() {
            findByLabelText('Upload PDFs').attachFile('test.pdf');
        }

        function clickContinueBtn() {
            findByRole('button', { name: 'Continue' }).click();
        }

        function clickCheckYourDocumentsBtn() {
            findByRole('button', { name: 'Check your documents' }).click();
        }

        function clickFindUkAddressBtn() {
            findByRole('button', { name: 'Find UK address' }).click();
        }

        function clickPayBtn() {
            findByRole('button', { name: 'Confirm application details & pay' }).click();
        }

        function clickConfirmPaymentBtn() {
            findByRole('button', { name: 'Confirm payment' }).click();
        }

        function clickPrintCoverSheetBtn() {
            cy.get('#print-cover').click();
        }


        function checkRadioAndClickContinue(radioLabelName) {
            findByLabelText(radioLabelName).check();
            clickContinueBtn();
        }

        function payForApplication() {
            cy.get('#card-no').type('5105105105105100');
            cy.get('#expiry-month').type('12');
            cy.get('#expiry-year').type('2032');
            cy.get('#cardholder-name').type('CYPRESS TEST');
            cy.get('#cvc').type('211');
            cy.get('#address-line-1').type('4-6 Upper Crescent');
            cy.get('#address-city').type('Belfast');
            cy.get('#address-country').type('United Kingdom');
            cy.get('#address-postcode').type('BT7 1NT');
            cy.get('#email').clear();
            cy.get('#email').type('conor.gallagher@kainos.com');
            clickContinueBtn();
            clickConfirmPaymentBtn();
            clickPrintCoverSheetBtn();
        }


        it('standard flow', () => {
            visit('/select-service');

            clickContinueBtn();
            checkA11y('[Error] Which service would you like?');

            checkA11y('Select radio option and check a11y');

            checkRadioAndClickContinue('Standard paper-based service');

            clickCheckYourDocumentsBtn();

            cy.contains('Civil Record (Birth, Death, Marriage certificate)').click();
            cy.get('#add_261').click();

            clickContinueBtn();
            cy.get('#docid_261_1').click();

            clickContinueBtn();
            clickContinueBtn();
            clickContinueBtn();

            //user details here
            cy.get('#first_name').type('Test');
            cy.get('#last_name').type('User');
            cy.get('#mobileNo').type('07777777777');
            cy.get('#telephone').type('02877777777');
            cy.get('#email').type('conor.gallagher@kainos.com');
            cy.get('#confirm_email').type('conor.gallagher@kainos.com');
            clickContinueBtn();

            cy.get('#radio-yes').click();
            clickContinueBtn();

            cy.get('#find-postcode').type('BT7 1NT');
            clickFindUkAddressBtn();
            cy.get('#address-list-box').select('Kainos Software Ltd 4-6 Upper Crescent Belfast BT7 1NT');
            clickContinueBtn();
            cy.get('#is-same').click();
            clickContinueBtn();
            clickContinueBtn();
            cy.get('#send_0').click();
            clickContinueBtn();
            cy.get('#return_0').click();
            clickContinueBtn();
            cy.get('#radio-feedback-no').click();
            clickContinueBtn();
            clickContinueBtn();
            cy.get('#all_info_correct').click();
            clickPayBtn();

            payForApplication();

        });
    });
});
