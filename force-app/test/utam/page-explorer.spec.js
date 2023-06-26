/**
 * This file holds end-to-end tests for the Product Explorer page.
 * We use UTAM and WebdriverIO to run UI tests.
 */
// import ProductFilter from '../../../pageObjects/productFilter';
// import ProductTileList from '../../../pageObjects/productTileList';
// import ProductCard from '../../../pageObjects/productCard';
// import ProductExplorerPage from '../../../pageObjects/productExplorerPage';
import { logInSalesforce } from './utam-helper';
import DesktopLayoutContainer from 'salesforce-pageobjects/navex/pageObjects/desktopLayoutContainer';
import ObjectHome from 'salesforce-pageobjects/force/pageObjects/objectHome';
import ModalContainer from 'salesforce-pageobjects/force/pageObjects/modalContainer';
import ChangeRecordType from 'salesforce-pageobjects/force/pageObjects/changeRecordType';

describe('perform some', () => {
    let domDocument;

    beforeAll(async () => {
        domDocument = await logInSalesforce();
    });

    it('first step', async () => {
        // Wait for home page to load
        const browserurl = await browser.getUrl();
        console.log('browser url : ' + browserurl);

        await (
            await (
                await (
                    await (await utam.load(DesktopLayoutContainer)).getAppNav()
                ).getAppNavBar()
            ).getNavItem('CPQ Quotes')
        ).clickAndWaitForUrl(
            '/lightning/o/Quote__c/list?filterName=Recent'
        );

        await (
            await (
                await (
                    await (
                        await (await utam.load(ObjectHome)).getListView()
                    ).getHeader()
                ).getActions()
            ).getActionLink('New')
        ).click();
        // await browser.debug();

        await (
            await utam.load(ChangeRecordType)
        ).selectRecordType('Test Record type');
        await browser.debug();
    });
});
