/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    BaseControl,
    ToggleControl,
    RangeControl,
    TabPanel,
    SelectControl,
    ButtonGroup,
    Button,
    TextControl,
    CheckboxControl,
    __experimentalDivider as Divider,
} from "@wordpress/components";
import { unescape as unescapeString } from "lodash";
/**
 * Internal dependencies
 */
import Select2 from "react-select";

import objAttributes from "./attributes";

const {
    TypographyDropdown,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ColorControl,
    BorderShadowControl,
    UnitControl,
    ResetControl,
    AdvancedControls,
    DynamicInputControl,
    EBIconPicker
} = window.EBTOCControls;

import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import { wrapMaxWidthPrefix } from "./constants/rangeNames";
import faIcons from "./fontawesomeIcons";

import {
    //
    WrpMarginConst,
    WrpPaddingConst,
    titlePaddingConst,
    contentPaddingConst,

} from "./constants/dimensionsConstants";

import {
    WrpBdShadowConst,
    ItemBdShadow,
    CLOSE_BORDER
} from "./constants/borderShadowConstants";

import {
    //
    HEADERS,
    ALIGNS,
    BORDER_STYLES,
    SCROLL_OPTIONS,
    STICKY_POSITION,
    PRESET
} from "./constants";

const Inspector = ({ attributes, setAttributes, deleteHeaders }) => {
    const {
        // responsive control attributes ⬇
        resOption,

        //
        visibleHeaders,
        collapsible,
        initialCollapse,
        mainBgc,
        titleBg,
        titleColor,
        contentBg,
        contentColor,
        contentHoverColor,
        indent,
        contentGap,
        contentGapUnit,
        displayTitle,
        titleAlign,
        isSmooth,
        seperator,
        seperatorSize,
        seperatorColor,
        seperatorStyle,
        scrollToTop,
        arrowHeight,
        arrowWidth,
        arrowBg,
        arrowColor,
        listSeperatorWidth,
        listSeperatorStyle,
        listSeperatorColor,
        hasUnderline,
        isSticky,
        contentHeight,
        topSpace,
        stickyHideOnMobile,
        scrollTarget,
        stickyPosition,
        //
        showListSeparator,
        topOffset,
        deleteHeaderList,
        title,
        enableCopyLink,
        scrollToTopIcon,
        listStyle,
        preset,
        enableListStyle,
        contentItemBg,
        itemCollapsed,
        closeBtnColor,
        closeBtnHoverColor,
        closeBtnBgColor,
        closeBtnBgHvColor,
        closeBtnSize,
        closeIconSize
    } = attributes;

    const [options, setOptions] = useState(HEADERS);
    const [defaultOptions, setDefaultOptions] = useState([]);

    //
    useEffect(() => {
        setDefaultVisible();
    }, [visibleHeaders]);

    //
    useEffect(() => {
        if (isSticky) {
            setAttributes({ displayTitle: true, collapsible: true });
        }
    }, [isSticky]);

    //
    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const setDefaultVisible = () => {
        let defaultOptions = [];

        visibleHeaders.map((header, index) => {
            if (header) {
                defaultOptions.push({
                    label: `H${index + 1}`,
                    value: index + 1,
                });
            }
        });

        setDefaultOptions(defaultOptions);
    };

    const CONTENT_GAP_STEP = contentGapUnit === "em" ? 0.1 : 1;
    const CONTENT_GAP_MAX = contentGapUnit === "em" ? 10 : 100;

    const onHeaderChange = (options) => {
        if (options) {
            let visibleHeaders = Array(6).fill(false);

            options.map((option) => (visibleHeaders[option.value - 1] = true));

            setAttributes({ visibleHeaders });
        } else {
            setAttributes({ visibleHeaders: [] });
        }
    };

    const onDeleteHeaderChange = (value, index) => {
        deleteHeaderList[index].isDelete = !value?.isDelete;
        setAttributes({ deleteHeaderList: [...deleteHeaderList] });
    };

    const handlePresetChange = (preset) => {

        switch (preset) {
            case "style-1":
                setAttributes({
                    seperator: false,

                    contentItemBg: '#fff',
                    itemB_Rds_Bottom: "4",
                    itemB_Rds_Left: "4",
                    itemB_Rds_Right: "4",
                    itemB_Rds_Top: "4",
                    itemB_Rds_Unit: "px",
                    itemB_Rds_isLinked: true,

                    wrpB_borderColor: "var(--eb-global-heading-color)",
                    wrpB_borderStyle: "none",
                    wrpB_Bdr_Bottom: "0",
                    wrpB_Bdr_Left: "0",
                    wrpB_Bdr_Right: "0",
                    wrpB_Bdr_Top: "0",
                    wrpB_Bdr_Unit: "px",
                    wrpB_Bdr_isLinked: false,
                });
                break;

            case "style-2":
                setAttributes({
                    seperator: true,
                    seperatorSize: 1,

                    contentItemBg: '',
                    itemB_Rds_Bottom: "0",
                    itemB_Rds_Left: "0",
                    itemB_Rds_Right: "0",
                    itemB_Rds_Top: "0",
                    itemB_Rds_Unit: "px",
                    itemB_Rds_isLinked: true,


                    wrpB_borderColor: "var(--eb-global-heading-color)",
                    wrpB_borderStyle: "solid",
                    wrpB_Bdr_Bottom: "0",
                    wrpB_Bdr_Left: "0",
                    wrpB_Bdr_Right: "0",
                    wrpB_Bdr_Top: "5",
                    wrpB_Bdr_Unit: "px",
                    wrpB_Bdr_isLinked: false,
                });
                break;
        }

        setAttributes({ preset });
    };

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: "general",
                            title: "General",
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: "Style",
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: "Advanced",
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div
                            className={"eb-tab-controls" + tab.name}
                            key={tab.name}
                        >
                            {tab.name === "general" && (
                                <>
                                    <style>
                                        {`
										.fix-select-over-lapping>div>div{
											z-index:999999 !important;
										}

										.wrap-width-range-fix-style .responsiveRangeControllerWrapper> .responsive-btn-wrapper > .responsive-btn > .responsive-btn-label{
											display:block;
											padding-bottom:5px;
										}


										.wrap-width-range-fix-style .responsiveRangeControllerWrapper{
											padding-top:15px;
										}

										.wrap-width-range-fix-style .responsiveRangeControllerWrapper> .components-button-group.eb-unit-control-btn-group{
											margin-bottom:-40px;
										}
										`}
                                    </style>
                                    <PanelBody
                                        title={__(
                                            "Content Settings",
                                            "table-of-contents-block"
                                        )}
                                        initialOpen={true}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Preset",
                                                "table-of-contents-block"
                                            )}
                                            value={preset}
                                            options={PRESET}
                                            onChange={(preset) => handlePresetChange(preset)}
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Display Underline",
                                                "table-of-contents-block"
                                            )}
                                            checked={hasUnderline}
                                            onChange={() =>
                                                setAttributes({
                                                    hasUnderline: !hasUnderline,
                                                })
                                            }
                                        />
                                        {displayTitle && !isSticky && (
                                            <ToggleControl
                                                label={__(
                                                    "Collapsible",
                                                    "table-of-contents-block"
                                                )}
                                                checked={collapsible}
                                                onChange={() =>
                                                    setAttributes({
                                                        collapsible: !collapsible,
                                                    })
                                                }
                                            />
                                        )}

                                        {displayTitle && collapsible && (
                                            <ToggleControl
                                                label={__(
                                                    "Collapsed initially",
                                                    "table-of-contents-block"
                                                )}
                                                checked={initialCollapse}
                                                onChange={() =>
                                                    setAttributes({
                                                        initialCollapse: !initialCollapse,
                                                    })
                                                }
                                            />
                                        )}

                                        <ToggleControl
                                            label={__(
                                                "Sticky contents",
                                                "table-of-contents-block"
                                            )}
                                            help={__(
                                                "Always show contents on sidebar (Visible on frontend only)"
                                            )}
                                            checked={isSticky}
                                            onChange={() =>
                                                setAttributes({
                                                    isSticky: !isSticky,
                                                })
                                            }
                                        />
                                        {isSticky && (
                                            <>
                                                <SelectControl
                                                    label={__(
                                                        "Sticky Position",
                                                        "table-of-contents-block"
                                                    )}
                                                    value={stickyPosition}
                                                    options={STICKY_POSITION}
                                                    onChange={(
                                                        stickyPosition
                                                    ) =>
                                                        setAttributes({
                                                            stickyPosition,
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__(
                                                        "Hide on Mobile",
                                                        "table-of-contents-block"
                                                    )}
                                                    checked={stickyHideOnMobile}
                                                    onChange={() =>
                                                        setAttributes({
                                                            stickyHideOnMobile: !stickyHideOnMobile,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                        <ToggleControl
                                            label={__(
                                                "Enable Item Collapsed",
                                                "table-of-contents-block"
                                            )}
                                            checked={itemCollapsed}
                                            onChange={() =>
                                                setAttributes({
                                                    itemCollapsed: !itemCollapsed,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Enable Copy Link",
                                                "table-of-contents-block"
                                            )}
                                            help={__(
                                                "Visible on frontend only"
                                            )}
                                            checked={enableCopyLink}
                                            onChange={() =>
                                                setAttributes({
                                                    enableCopyLink: !enableCopyLink,
                                                })
                                            }
                                        />
                                        <TextControl
                                            label={__(
                                                "Offset Top",
                                                "table-of-contents-block"
                                            )}
                                            value={topOffset}
                                            onChange={(value) =>
                                                setAttributes({
                                                    topOffset: value,
                                                })
                                            }
                                            type="number"
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Enable List Style",
                                                "table-of-contents-block"
                                            )}
                                            checked={enableListStyle}
                                            onChange={() =>
                                                setAttributes({
                                                    enableListStyle: !enableListStyle,
                                                })
                                            }
                                        />

                                        {enableListStyle && (
                                            <SelectControl
                                                label={__(
                                                    "List Style",
                                                    "table-of-contents-block"
                                                )}
                                                value={listStyle}
                                                options={[
                                                    {
                                                        label: __(
                                                            "Unordered",
                                                            "table-of-contents-block"
                                                        ),
                                                        value: "ul",
                                                    },
                                                    {
                                                        label: __(
                                                            "Ordered",
                                                            "table-of-contents-block"
                                                        ),
                                                        value: "ol",
                                                    },
                                                ]}
                                                onChange={(listStyle) =>
                                                    setAttributes({
                                                        listStyle,
                                                    })
                                                }
                                            />
                                        )}


                                    </PanelBody>
                                    <PanelBody
                                        title={__("Title", "essential-block")} initialOpen={false}
                                    >
                                        <>
                                            {!isSticky && (
                                                <ToggleControl
                                                    label={__(
                                                        "Display Title",
                                                        "table-of-contents-block"
                                                    )}
                                                    checked={displayTitle}
                                                    onChange={() =>
                                                        setAttributes({
                                                            displayTitle: !displayTitle,
                                                        })
                                                    }
                                                />
                                            )}
                                            <DynamicInputControl
                                                label={__(
                                                    "Title Text",
                                                    "table-of-contents-block"
                                                )}
                                                attrName="title"
                                                inputValue={title}
                                                setAttributes={setAttributes}
                                                onChange={(text) =>
                                                    setAttributes({
                                                        title: text,
                                                    })
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Supported Heading Tags",
                                            "table-of-contents-block"
                                        )}
                                    >
                                        <div className="fix-select-over-lapping">
                                            <Select2
                                                options={options}
                                                value={defaultOptions}
                                                defaultValue={defaultOptions}
                                                isMulti
                                                onChange={onHeaderChange}
                                            />
                                        </div>
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Scroll", "table-of-contents-block")}
                                        initialOpen={false}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Smooth Scroll",
                                                "table-of-contents-block"
                                            )}
                                            checked={isSmooth}
                                            onChange={() =>
                                                setAttributes({
                                                    isSmooth: !isSmooth,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Scroll To Top",
                                                "table-of-contents-block"
                                            )}
                                            checked={scrollToTop}
                                            onChange={() =>
                                                setAttributes({
                                                    scrollToTop: !scrollToTop,
                                                })
                                            }
                                        />

                                        {scrollToTop && (
                                            <>
                                                <Divider />
                                                <EBIconPicker
                                                    value={scrollToTopIcon}
                                                    onChange={(scrollToTopIcon) =>
                                                        setAttributes({
                                                            scrollToTopIcon,
                                                        })
                                                    }
                                                />
                                                {!isSticky && (
                                                    <SelectControl
                                                        label={__(
                                                            "Scroll Target",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={scrollTarget}
                                                        options={SCROLL_OPTIONS}
                                                        onChange={(
                                                            scrollTarget
                                                        ) =>
                                                            setAttributes({
                                                                scrollTarget,
                                                            })
                                                        }
                                                    />
                                                )}
                                                <RangeControl
                                                    label={__(
                                                        "Arrow Height",
                                                        "table-of-contents-block"
                                                    )}
                                                    value={arrowHeight}
                                                    onChange={(arrowHeight) =>
                                                        setAttributes({
                                                            arrowHeight,
                                                        })
                                                    }
                                                    min={0}
                                                    max={100}
                                                />

                                                <RangeControl
                                                    label={__(
                                                        "Arrow Width",
                                                        "table-of-contents-block"
                                                    )}
                                                    value={arrowWidth}
                                                    onChange={(arrowWidth) =>
                                                        setAttributes({
                                                            arrowWidth,
                                                        })
                                                    }
                                                    min={0}
                                                    max={100}
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Arrow Background",
                                                        "table-of-contents-block"
                                                    )}
                                                    color={arrowBg}
                                                    onChange={(arrowBg) =>
                                                        setAttributes({
                                                            arrowBg,
                                                        })
                                                    }
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Arrow Color",
                                                        "table-of-contents-block"
                                                    )}
                                                    color={arrowColor}
                                                    onChange={(arrowColor) =>
                                                        setAttributes({
                                                            arrowColor,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>
                                    {typeof eb_conditional_localize !==
                                        "undefined" &&
                                        eb_conditional_localize?.editor_type !==
                                        "edit-site" && (
                                            <PanelBody
                                                title={__(
                                                    "Exclude Headings",
                                                    "table-of-contents-block"
                                                )}
                                                initialOpen={false}
                                            >
                                                {deleteHeaderList.map(
                                                    (header, index) => {
                                                        return (
                                                            <CheckboxControl
                                                                key={index}
                                                                label={unescapeString(
                                                                    header.label
                                                                )}
                                                                value={
                                                                    header.value
                                                                }
                                                                checked={
                                                                    header.isDelete
                                                                }
                                                                onChange={() => {
                                                                    onDeleteHeaderChange(
                                                                        header,
                                                                        index
                                                                    );
                                                                }}
                                                            />
                                                        );
                                                    }
                                                )}
                                            </PanelBody>
                                        )}
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    {displayTitle && (
                                        <PanelBody
                                            title={__(
                                                "Title",
                                                "table-of-contents-block"
                                            )}
                                            initialOpen={true}
                                        >
                                            <BaseControl
                                                label={__(
                                                    "Align",
                                                    "table-of-contents-block"
                                                )}
                                                className="eb-base-control"
                                            >
                                                <ButtonGroup>
                                                    {ALIGNS.map(
                                                        (align, index) => (
                                                            <Button
                                                                key={index}
                                                                isSmall
                                                                isPrimary={
                                                                    titleAlign ===
                                                                    align.value
                                                                }
                                                                isSecondary={
                                                                    titleAlign !==
                                                                    align.value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            titleAlign:
                                                                                align.value,
                                                                        }
                                                                    )
                                                                }
                                                            >
                                                                {align.label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            <ColorControl
                                                label={__(
                                                    "Background Color",
                                                    "table-of-contents-block"
                                                )}
                                                color={titleBg}
                                                onChange={(titleBg) =>
                                                    setAttributes({
                                                        titleBg,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Text Color",
                                                    "table-of-contents-block"
                                                )}
                                                color={titleColor}
                                                onChange={(titleColor) =>
                                                    setAttributes({
                                                        titleColor,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                baseLabel="Typography"
                                                typographyPrefixConstant={
                                                    typoPrefix_title
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                defaultFontSize={22}
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={titlePaddingConst}
                                                baseLabel="Padding"
                                            />
                                            <Divider />
                                            <ToggleControl
                                                label={__(
                                                    "Title Separator",
                                                    "table-of-contents-block"
                                                )}
                                                checked={seperator}
                                                onChange={() =>
                                                    setAttributes({
                                                        seperator: !seperator,
                                                    })
                                                }
                                            />
                                            {seperator && (
                                                <>
                                                    <RangeControl
                                                        label={__(
                                                            "Seperator Size",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={seperatorSize}
                                                        onChange={(
                                                            seperatorSize
                                                        ) =>
                                                            setAttributes({
                                                                seperatorSize,
                                                            })
                                                        }
                                                        min={0}
                                                        max={100}
                                                    />

                                                    <ColorControl
                                                        label={__(
                                                            "Separator Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={seperatorColor}
                                                        onChange={(
                                                            seperatorColor
                                                        ) =>
                                                            setAttributes({
                                                                seperatorColor,
                                                            })
                                                        }
                                                    />

                                                    <SelectControl
                                                        label={__(
                                                            "Separator Style",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={seperatorStyle}
                                                        options={BORDER_STYLES}
                                                        onChange={(
                                                            seperatorStyle
                                                        ) =>
                                                            setAttributes({
                                                                seperatorStyle,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </PanelBody>
                                    )}
                                    <PanelBody
                                        title={__(
                                            "Content",
                                            "table-of-contents-block"
                                        )}
                                        initialOpen={false}
                                    >
                                        <div className="wrap-width-range-fix-style">
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    `${isSticky
                                                        ? "Sticky max width"
                                                        : "Container max width"
                                                    }`
                                                )}
                                                controlName={wrapMaxWidthPrefix}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={2000}
                                                step={1}
                                            />
                                            <RangeControl
                                                label={__(
                                                    "Indent",
                                                    "table-of-contents-block"
                                                )}
                                                value={indent}
                                                onChange={(indent) =>
                                                    setAttributes({ indent })
                                                }
                                            />

                                            <UnitControl
                                                selectedUnit={contentGapUnit}
                                                unitTypes={[
                                                    {
                                                        label: "px",
                                                        value: "px",
                                                    },
                                                    { label: "%", value: "%" },
                                                    {
                                                        label: "em",
                                                        value: "em",
                                                    },
                                                ]}
                                                onClick={(contentGapUnit) =>
                                                    setAttributes({
                                                        contentGapUnit,
                                                    })
                                                }
                                            />

                                            <RangeControl
                                                label={__(
                                                    "Content Gap",
                                                    "table-of-contents-block"
                                                )}
                                                value={contentGap}
                                                onChange={(contentGap) =>
                                                    setAttributes({
                                                        contentGap,
                                                    })
                                                }
                                                min={0}
                                                max={CONTENT_GAP_MAX}
                                                step={CONTENT_GAP_STEP}
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Background Color",
                                                    "table-of-contents-block"
                                                )}
                                                color={contentBg}
                                                onChange={(contentBg) =>
                                                    setAttributes({ contentBg })
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Text Color",
                                                    "table-of-contents-block"
                                                )}
                                                color={contentColor}
                                                onChange={(contentColor) =>
                                                    setAttributes({
                                                        contentColor,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Hover Color",
                                                    "table-of-contents-block"
                                                )}
                                                color={contentHoverColor}
                                                onChange={(contentHoverColor) =>
                                                    setAttributes({
                                                        contentHoverColor,
                                                    })
                                                }
                                            />

                                            <TypographyDropdown
                                                baseLabel="Typography"
                                                typographyPrefixConstant={
                                                    typoPrefix_content
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                defaultFontSize={20}
                                            />

                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={
                                                    contentPaddingConst
                                                }
                                                baseLabel="Padding"
                                            />

                                            <ToggleControl
                                                label={__(
                                                    "Show Separator",
                                                    "table-of-contents-block"
                                                )}
                                                checked={showListSeparator}
                                                onChange={() =>
                                                    setAttributes({
                                                        showListSeparator: !showListSeparator,
                                                    })
                                                }
                                            />
                                            {showListSeparator && (
                                                <>
                                                    <RangeControl
                                                        label={__(
                                                            "Separator Size",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={
                                                            listSeperatorWidth
                                                        }
                                                        onChange={(
                                                            listSeperatorWidth
                                                        ) =>
                                                            setAttributes({
                                                                listSeperatorWidth,
                                                            })
                                                        }
                                                        min={0}
                                                        max={100}
                                                    />
                                                    <SelectControl
                                                        label={__(
                                                            "Separator Style",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={
                                                            listSeperatorStyle
                                                        }
                                                        options={BORDER_STYLES}
                                                        onChange={(
                                                            listSeperatorStyle
                                                        ) =>
                                                            setAttributes({
                                                                listSeperatorStyle,
                                                            })
                                                        }
                                                    />

                                                    <ColorControl
                                                        label={__(
                                                            "Separator Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={
                                                            listSeperatorColor
                                                        }
                                                        onChange={(
                                                            listSeperatorColor
                                                        ) =>
                                                            setAttributes({
                                                                listSeperatorColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            {preset == 'style-1' && (
                                                <>
                                                    <Divider />
                                                    <ColorControl
                                                        label={__(
                                                            "Item Background Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={contentItemBg}
                                                        onChange={(contentItemBg) =>
                                                            setAttributes({ contentItemBg })
                                                        }
                                                    />
                                                    <PanelBody
                                                        title={__("Border & Shadow")}
                                                        initialOpen={false}
                                                    >
                                                        <BorderShadowControl
                                                            controlName={ItemBdShadow}
                                                            resRequiredProps={resRequiredProps}
                                                        // noShadow
                                                        // noBorder
                                                        />
                                                    </PanelBody>
                                                </>
                                            )}

                                        </div>
                                    </PanelBody>
                                    {isSticky && (
                                        <PanelBody
                                            title={__(
                                                "Sticky",
                                                "table-of-contents-block"
                                            )}
                                            initialOpen={false}
                                        >
                                            <div className="eb-reset-button-margin-fix">
                                                <ResetControl
                                                    onReset={() =>
                                                        setAttributes({
                                                            contentHeight: undefined,
                                                        })
                                                    }
                                                >
                                                    <RangeControl
                                                        label={__(
                                                            "Content min-height",
                                                            "table-of-contents-block"
                                                        )}
                                                        help={__(
                                                            "Visible on frontend only",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={contentHeight}
                                                        onChange={(
                                                            contentHeight
                                                        ) =>
                                                            setAttributes({
                                                                contentHeight,
                                                            })
                                                        }
                                                        min={0}
                                                        max={1000}
                                                    />
                                                </ResetControl>
                                            </div>
                                            <RangeControl
                                                label={__(
                                                    "Top Space",
                                                    "table-of-contents-block"
                                                )}
                                                help={__(
                                                    "Visible on frontend only",
                                                    "table-of-contents-block"
                                                )}
                                                value={topSpace}
                                                onChange={(topSpace) =>
                                                    setAttributes({
                                                        topSpace,
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                            />

                                            <PanelBody
                                                title={__(
                                                    "Close Button",
                                                    "table-of-contents-block"
                                                )}
                                                initialOpen={false}
                                            >
                                                <>

                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={closeBtnColor}
                                                        onChange={(
                                                            closeBtnColor
                                                        ) =>
                                                            setAttributes({
                                                                closeBtnColor
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Hover Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={closeBtnHoverColor}
                                                        onChange={(
                                                            closeBtnHoverColor
                                                        ) =>
                                                            setAttributes({
                                                                closeBtnHoverColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Background Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={closeBtnBgColor}
                                                        onChange={(
                                                            closeBtnBgColor
                                                        ) =>
                                                            setAttributes({
                                                                closeBtnBgColor,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Background Hover Color",
                                                            "table-of-contents-block"
                                                        )}
                                                        color={
                                                            closeBtnBgHvColor
                                                        }
                                                        onChange={(
                                                            closeBtnBgHvColor
                                                        ) =>
                                                            setAttributes({
                                                                closeBtnBgHvColor,
                                                            })
                                                        }
                                                    />
                                                    <RangeControl
                                                        label={__(
                                                            "Button Size",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={closeBtnSize}
                                                        onChange={(closeBtnSize) =>
                                                            setAttributes({
                                                                closeBtnSize,
                                                            })
                                                        }
                                                        min={0}
                                                        max={100}
                                                    />
                                                    <RangeControl
                                                        label={__(
                                                            "Icon Size",
                                                            "table-of-contents-block"
                                                        )}
                                                        value={closeIconSize}
                                                        onChange={(closeIconSize) =>
                                                            setAttributes({
                                                                closeIconSize,
                                                            })
                                                        }
                                                        min={0}
                                                        max={100}
                                                    />


                                                    <PanelBody
                                                        title={__(
                                                            "Border",
                                                            "table-of-contents-block"
                                                        )}
                                                        initialOpen={false}
                                                    >
                                                        <BorderShadowControl
                                                            controlName={
                                                                CLOSE_BORDER
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            noShadow={true}
                                                        />
                                                    </PanelBody>
                                                </>
                                            </PanelBody>
                                        </PanelBody>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__("Margin & Padding")}
                                    // initialOpen={true}
                                    >
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WrpMarginConst}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WrpPaddingConst}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Background ",
                                            "table-of-contents-block"
                                        )}
                                    >
                                        <ColorControl
                                            label={__(
                                                "Background Color",
                                                "table-of-contents-block"
                                            )}
                                            color={mainBgc}
                                            onChange={(mainBgc) =>
                                                setAttributes({ mainBgc })
                                            }
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WrpBdShadowConst}
                                            resRequiredProps={resRequiredProps}
                                        // noShadow
                                        // noBorder
                                        />
                                    </PanelBody>

                                    <AdvancedControls
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
        </InspectorControls>
    );
};

export default Inspector;
