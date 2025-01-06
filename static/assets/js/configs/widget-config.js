/* global app */
'use strict'
WidgetConfig = {

KsAcademyHeadCount:{
    "id": "KsAcademyHeadCount",
    "type": PageWidget,
    "widgets": [
        {
            "id": "KsAcademyHeadCountGridRow1",
            "type": GridRowWidget,
            "height": "10%",
            "width": "100%",
            "skin": "bottom_border_main3",
            "widgets": [
                {
                    "id": "KsAcademyHeadCountGridRow1Cell1",
                    "type": GridCellWidget,
                    "width": "20%",
                    "alignment": "center-left",
                    "marginLeft": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadCountGridRow1Cell1Button",
                            "type": ButtonWidget,
                            "icon": "icon-arrow-back",
                            "iconFontSize": 20,
                            "iconColor": "#000"
                        },
                        {
                            "id": "KsAcademyHeadCountGridRow1Cell1Text",
                            "type": TextWidget,
                            "skin": "menu2",
                            "title": "HeadCount",
                            "titleFontSize": 45,
                            "titleFontColor": "#000"
                        }
                    ]
                }
            ]
        }
    ]
},
KsAcademyMainPage:{
    "id": "KsAcademyMainPage",
    "type": PageWidget,
    "widgets": [
        {
            "id": "KsAcademyMainPageGridRow1",
            "type": GridRowWidget,
            "height": "10%",
            "width": "100%",
            "skin": "bottom_border_main3",
            "widgets": [
                {
                    "id": "KsAcademyMainPageGridRow1Cell1",
                    "type": GridCellWidget,
                    "width": "20%",
                    "alignment": "center-left",
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow1Cell1Text",
                            "type": TextWidget,
                            "skin": "menu2",
                            "title": "Ks Academy",
                            "titleFontSize": 45,
                            "titleFontColor": "#000",
                            "marginLeft": 20
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyMainPageGridRow2",
            "type": GridRowWidget,
            "marginTop": "5%",
            "widgets": [
                {
                    "id": "KsAcademyMainPageGridRow2Cell1",
                    "type": GridCellWidget,
                    "width": "30%",
                    "height": 20
                },
                {
                    "id": "KsAcademyMainPageGridRow2Cell2",
                    "type": GridCellWidget,
                    "width": "12%",
                    "height": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow2Cell2Button",
                            "type": ButtonWidget,
                            "height": 145,
                            "width": 145,
                            "icon": "icon-product-groups",
                            "skin": "main_blue"
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyMainPageGridRow3",
            "type": GridRowWidget,
            "widgets": [
                {
                    "id": "KsAcademyMainPageGridRow3Cell1",
                    "type": GridCellWidget,
                    "width": "30%"
                },
                {
                    "id": "KsAcademyMainPageGridRow3Cell2",
                    "type": GridCellWidget,
                    "width": "12%",
                    "height": "6%",
                    "marginTop": "2%",
                    "widgets": [
                        {
                            "id": "KsAcademyMainPageGridRow3Cell2Text",
                            "type": TextWidget,
                            "title": "Headcount",
                            "titleAlignment": "center",
                            "titleFontSize": 16,
                            "titleFontColor": "#000",
                            "skin": "menu"
                        }
                    ]
                }
            ]
        }
    ]
},

};
