/* global app */
'use strict'
WidgetConfig = {

KsAcademyHeadcount:{
    "id": "KsAcademyHeadcount",
    "type": PageWidget,
    "widgets": [
        {
            "id": "KsAcademyHeadcountGridRow1",
            "type": GridRowWidget,
            "height": "10%",
            "width": "100%",
            "skin": "bottom_border_main3",
            "widgets": [
                {
                    "id": "KsAcademyHeadcountGridRow1Cell1",
                    "type": GridCellWidget,
                    "width": "20%",
                    "alignment": "center-left",
                    "marginLeft": 20,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow1Cell1Button",
                            "type": ButtonWidget,
                            "icon": "icon-arrow-back",
                            "iconFontSize": 20,
                            "iconColor": "#000"
                        },
                        {
                            "id": "KsAcademyHeadcountGridRow1Text",
                            "type": TextWidget,
                            "skin": "menu2",
                            "title": "Headcount",
                            "titleFontSize": 45,
                            "titleFontColor": "#000"
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyHeadcountGridRow2",
            "type": GridRowWidget,
            "widgets": [
                {
                    "id": "KsAcademyHeadcountGridRow2Cell1",
                    "type": GridCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow2Cell1Dropbox",
                            "type": DropBoxWidget,
                            "skin": "edit"
                        }
                    ]
                },
                {
                    "id": "KsAcademyHeadcountGridRow2Cell2",
                    "type": GridCellWidget,
                    "widgets": [
                        {
                            "id": "KsAcademyHeadcountGridRow2Cell2Segmented",
                            "type": SegmentedControlWidget,
                            "skin": "segmented",
                            "width": 300,
                            "marginLeft": "5%",
                            "widgets": [
                                {
                                    "id": "KsAcademyHeadcountGridRow2Cell2SegmentedItem1",
                                    "type": SegmentedControlItemWidget,
                                    "skin": "segmented-left"
                                },
                                {
                                    "id": "KsAcademyHeadcountGridRow2Cell2SegmentedItem2",
                                    "type": SegmentedControlItemWidget,
                                    "skin": "segmented-right"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "KsAcademyHeadcountGridTable",
            "type": GridTableWidget,
            "skin": "list_table",
            "width": "25%",
            "marginTop": 20,
            "visible": true,
            "widgets": [
                {
                    "id": "GridTableHeaderRow",
                    "type": GridTableHeaderRowWidget,
                    "widgets": [
                        {
                            "id": "GridTableHeaderRowCell0",
                            "type": GridTableHeaderCellWidget,
                            "width": "10%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell0Text",
                                    "type": TextWidget,
                                    "title": "Group Name",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        },
                        {
                            "id": "GridTableHeaderRowCell1",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell1Text",
                                    "type": TextWidget,
                                    "title": "Base Salary",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        },
                        {
                            "id": "GridTableHeaderRowCell2",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell2Text",
                                    "type": TextWidget,
                                    "title": "FTE",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        },
                        {
                            "id": "GridTableHeaderRowCell3",
                            "type": GridTableHeaderCellWidget,
                            "width": "4%",
                            "alignment": "center-left",
                            "widgets": [
                                {
                                    "id": "GridTableHeaderRowCell3Text",
                                    "type": TextWidget,
                                    "title": "Bonus",
                                    "titleFontWeight": 600,
                                    "paddingLeft": 10
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "GridTableCell0",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell0Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "GridTableCell1",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell1Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "GridTableCell2",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell2Text",
                            "type": TextWidget
                        }
                    ]
                },
                {
                    "id": "GridTableCell3",
                    "type": GridTableCellWidget,
                    "widgets": [
                        {
                            "id": "GridTableCell3Text",
                            "type": TextWidget
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
                            "id": "KsAcademyMainPageGridRow1Text",
                            "type": TextWidget,
                            "skin": "menu2",
                            "title": "KsAcademy",
                            "titleFontSize": 45,
                            "titleFontColor": "#000"
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
                            "width": 145,
                            "height": 145,
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
