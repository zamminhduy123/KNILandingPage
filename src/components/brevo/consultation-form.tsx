import { useTranslations } from "next-intl";
import Script from "next/script";

export default function BrevoForm() {
  const t = useTranslations("ConsultationBrevoForm");

  return (
    <>
      {/* Styles */}
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />

      {/* Form Container */}
      <div
        className="sib-form consultation-form"
        style={{ textAlign: "center" }}
      >
        <div id="sib-form-container" className="sib-form-container">
          {/* Form */}
          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical"
            style={{
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,1)",
              maxWidth: "100%",
              direction: "ltr",
            }}
          >
            <form
              id="sib-form"
              method="POST"
              action="https://sibforms.com/serve/MUIFAEVo8bsVIWEQiFAmxMnXzak2dnG_uuhRsxk-qcc_SYGlH6d3aLCyBdISl9_8UiPaGuFTcimiQ3UEyeXYCHQwqcGk1HuAWcU-Jx41BI5L5y0FrubR78LhFBdNk5GcMs7qRGAHib-Xo1cAO0veLyOA5wWlchOmJz_x24LlXo39mmK6xjmg2tbhdPCSungq6gSI63FGPqfGjL57"
              data-type="subscription"
            >
              {/* Name Input */}
              <div>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label mb-0! mt-2!"
                        style={{
                          fontWeight: 700,
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: "Inter, sans-serif",

                          color: "#3c4858",
                        }}
                        htmlFor="FIRSTNAME"
                        data-required="*"
                      >
                        {t("nameLabel") || "TÊN"}
                      </label>
                      <div className="entry__field">
                        <input
                          className="input"
                          maxLength={200}
                          type="text"
                          id="FIRSTNAME"
                          name="FIRSTNAME"
                          autoComplete="off"
                          data-required="true"
                          required
                          placeholder={t("form.name")}
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label mb-0! mt-1!"
                        style={{
                          fontWeight: 700,
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: "Inter, sans-serif",
                          color: "#3c4858",
                        }}
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        {t("emailLabel") || "EMAIL"}
                      </label>
                      <div className="entry__field">
                        <input
                          placeholder={t("form.email")}
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                  </div>
                </div>
              </div>

              {/* Zalo Input */}
            <div>
                <div className="sib-sms-field sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        style={{
                          fontWeight: 700,
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: "Inter, sans-serif",
                          color: "#3c4858",
                        }}
                        htmlFor="SMS"
                        data-required="*"
                      >
                        {t("zaloLabel")}
                      </label>
                      <div
                        className="sib-sms-input-wrapper"
                        style={{ direction: "ltr" }}
                      >
                        {/* Hidden input for country code */}
                        <input
                          type="hidden"
                          name="SMS__COUNTRY_CODE"
                          value="+84"
                          data-required="true"
                        />
                        <div className="entry__field" style={{ width: "100%" }}>
                          <input
                            type="tel"
                            className="input"
                            id="SMS"
                            name="SMS"
                            autoComplete="off"
                            placeholder="SMS"
                            data-required="true"
                            required
                          />
                        </div>
                        <div className="sib-sms-tooltip">
                          <div className="sib-sms-tooltip__box">
                            {t("zaloTooltip")}
                          </div>
                          <span className="sib-sms-tooltip__icon">?</span>
                        </div>
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                    <label
                      className="entry__error entry__error--secondary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                    <label
                      className="entry__specification"
                      style={{
                        fontSize: "12px",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        color: "#8390A4",
                      }}
                    >
                      {t("zaloHelpText")}
                    </label>
                  </div>
                </div>
              </div>

              {/* Search Checkbox Group */}
              <div style={{ padding: "8px 0" }}>
                <div
                  className="sib-checkbox-group sib-form-block"
                  data-required="true"
                >
                  <div className="form__entry entry_mcq">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        style={{
                          fontWeight: 700,
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: "Inter, sans-serif",
                          color: "#3c4858",
                        }}
                        data-required="*"
                      >
                        {t("searchLabel") || "Bạn tìm được chúng mình qua đâu?"}
                      </label>
                      <div>
                        <div className="entry__choice">
                          <label className="checkbox__label">
                            <input
                              type="checkbox"
                              className="input_replaced"
                              name="SEARCH[]"
                              value="Facebook"
                              data-required="true"
                            />
                            <span
                              className="checkbox checkbox_tick_positive"
                              style={{ marginLeft: "" }}
                            ></span>
                            <span
                              style={{
                                fontSize: "16px",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                                color: "#3C4858",
                                backgroundColor: "transparent",
                              }}
                            >
                              Facebook
                            </span>
                          </label>
                        </div>
                        <div className="entry__choice">
                          <label className="checkbox__label">
                            <input
                              type="checkbox"
                              className="input_replaced"
                              name="SEARCH[]"
                              value="Instagram"
                              data-required="true"
                            />
                            <span
                              className="checkbox checkbox_tick_positive"
                              style={{ marginLeft: "" }}
                            ></span>
                            <span
                              style={{
                                fontSize: "16px",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                                color: "#3C4858",
                                backgroundColor: "transparent",
                              }}
                            >
                              Instagram
                            </span>
                          </label>
                        </div>
                        <div className="entry__choice">
                          <label className="checkbox__label">
                            <input
                              type="checkbox"
                              className="input_replaced"
                              name="SEARCH[]"
                              value="Tik Tok"
                              data-required="true"
                            />
                            <span
                              className="checkbox checkbox_tick_positive"
                              style={{ marginLeft: "" }}
                            ></span>
                            <span
                              style={{
                                fontSize: "16px",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                                color: "#3C4858",
                                backgroundColor: "transparent",
                              }}
                            >
                              Tik Tok
                            </span>
                          </label>
                        </div>
                        <div className="entry__choice">
                          <label className="checkbox__label">
                            <input
                              type="checkbox"
                              className="input_replaced"
                              name="SEARCH[]"
                              value="Được giới thiệu từ người quen"
                              data-required="true"
                            />
                            <span
                              className="checkbox checkbox_tick_positive"
                              style={{ marginLeft: "" }}
                            ></span>
                            <span
                              style={{
                                fontSize: "16px",
                                textAlign: "left",
                                fontFamily: "Inter, sans-serif",
                                color: "#3C4858",
                                backgroundColor: "transparent",
                              }}
                            >
                              {t("searchOptions.referred") ||
                                "Được giới thiệu từ người quen"}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Inter, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              <div
                id="error-message"
                className="sib-form-message-panel border-0! m-0! w-[100%]!"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Inter, sans-serif",
                  color: "#661d1d",
                  backgroundColor: "#ffeded",
                }}
              >
                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                  <svg
                    viewBox="0 0 512 512"
                    className="sib-icon sib-notification__icon"
                  >
                    <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                  </svg>
                  <span className="sib-form-message-panel__inner-text">
                    {t("errorMessage") || "Có lỗi. Xin thử lại!"}
                  </span>
                </div>
              </div>

              {/* Success Message */}
              <div
                id="success-message"
                className="sib-form-message-panel border-0! m-0! w-[100%]!"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: "Inter, sans-serif",
                  color: "#085229",
                  backgroundColor: "#e7faf0",
                  borderRadius: "3px",
                }}
              >
                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                  <svg
                    viewBox="0 0 512 512"
                    className="sib-icon sib-notification__icon"
                  >
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                  </svg>
                  <span className="sib-form-message-panel__inner-text">
                    {t("successMessage") ||
                      "Đăng ký thành công, nhớ check Zalo của bạn nhé!"}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ padding: "8px 0" }}>
                <div className="sib-form-block" style={{ textAlign: "left" }}>
                  <button
                    className="sib-form-block__button-with-loader bg-[#ff914d] text-white uppercase px-6 py-3 rounded-md hover:bg-orange-500 transition flex items-center justify-center cursor-pointer"
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    {t("submitButton") || "ĐĂNG KÝ!"}
                  </button>
                </div>
              </div>

              {/* Hidden Inputs */}
              <input
                type="text"
                name="email_address_check"
                defaultValue=""
                className="input--hidden"
              />
              <input type="hidden" name="locale" defaultValue="en" />
            </form>
          </div>
        </div>
      </div>

      {/* Scripts */}
      <Script id="brevo-form-script" strategy="afterInteractive">
        {`
          window.REQUIRED_CODE_ERROR_MESSAGE = '${
            t("requiredCodeError") || "Please choose a country code"
          }';
          window.LOCALE = 'en';
          window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "${
            t("invalidMessage") || "Thông tin không hợp lệ, vui lòng điền lại!"
          }";
          window.REQUIRED_ERROR_MESSAGE = "${
            t("requiredError") || "Đừng bỏ trống tui :("
          }";
          window.GENERIC_INVALID_MESSAGE = "${
            t("invalidMessage") || "Thông tin không hợp lệ, vui lòng điền lại!"
          }";
          window.translation = {
            common: {
              selectedList: '{quantity} list selected',
              selectedLists: '{quantity} lists selected',
              selectedOption: '{quantity} selected',
              selectedOptions: '{quantity} selected',
            }
          };
          var AUTOHIDE = Boolean(0);
        `}
      </Script>
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
}
