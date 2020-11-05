import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { isMobile } from 'react-device-detect';

import {
	resetPassword,
	otpRequest,
	otpActivate,
	otpSetActivated,
	otpRevoke
} from '../../actions/userAction';
import {
	Accordion,
	Dialog,
	SuccessDisplay,
	OtpForm,
	IconTitle,
	Loader
} from '../../components';
import { errorHandler } from '../../components/OtpForm/utils';
import ChangePasswordForm, { generateFormValues } from './ChangePasswordForm';
import { OTP, renderOTPForm } from './OTP';
import { DeveloperSection } from './DeveloperSection';

import STRINGS from '../../config/localizedStrings';
import withConfig from 'components/ConfigProvider/withConfig';

class UserVerification extends Component {
	state = {
		sections: [],
		dialogIsOpen: false,
		modalText: '',
		stringId: '',
	};

	componentDidMount() {
		this.calculateSections(this.props.user);
		if (this.props.openApiKey) {
			this.openDevelopers();
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (
			nextProps.user.otp.requested !== this.props.user.otp.requested ||
			nextProps.user.otp.requesting !== this.props.user.otp.requesting ||
			nextProps.user.otp.activated !== this.props.user.otp.activated ||
			nextProps.user.otp_enabled !== this.props.user.otp_enabled ||
			nextProps.activeLanguage !== this.props.activeLanguage
		) {
			this.calculateSections(nextProps.user);
		}

		if (
			nextProps.user.otp.requested &&
			nextProps.user.otp.requested !== this.props.user.otp.requested
		) {
			this.setState({ dialogIsOpen: true, modalText: '', stringId: '' });
		} else if (nextProps.user.otp.error !== this.props.user.otp.error) {
			this.setState({
				dialogIsOpen: true,
				modalText: nextProps.user.otp.error,
        stringId: '',
			});
		}
	}

	calculateSections = (user) => {
		const formValues = generateFormValues();
		const { otp_enabled, otp, verification_level } = user;
		const { icons: ICONS } = this.props;

		const sections = [
			{
				stringId: "ACCOUNT_SECURITY.OTP.TITLE",
				title: STRINGS["ACCOUNT_SECURITY.OTP.TITLE"],
				content: (
					<OTP
						requestOTP={this.handleOTPCheckbox}
						data={otp}
						otp_enabled={otp_enabled}
					>
						{/*otp_enabled && (
							<div className="d-flex flex-column">
								<CheckboxButton
									label={STRINGS["ACCOUNT_SECURITY.OTP.ENABLED_TEXTS.TEXT_1"]}
									checked={true}
								/>
								<CheckboxButton
									label={STRINGS["ACCOUNT_SECURITY.OTP.ENABLED_TEXTS.TEXT_2"]}
									checked={true}
								/>
							</div>
						)*/}
					</OTP>
				),
				notification: {
					stringId: "ACCOUNT_SECURITY.OTP.OTP_ENABLED,ACCOUNT_SECURITY.OTP.OTP_DISABLED",
					text: otp_enabled
						? STRINGS["ACCOUNT_SECURITY.OTP.OTP_ENABLED"]
						: STRINGS["ACCOUNT_SECURITY.OTP.OTP_DISABLED"],
					status: otp_enabled ? 'success' : 'warning',
					iconPath: otp_enabled ? ICONS["GREEN_CHECK"] : ICONS["RED_ARROW"],
					iconId: "GREEN_CHECK,RED_ARROW",
					allowClick: !otp_enabled
				}
			},
			{
				stringId: "ACCOUNT_SECURITY.CHANGE_PASSWORD.TITLE",
				title: STRINGS["ACCOUNT_SECURITY.CHANGE_PASSWORD.TITLE"],
				content: (
					<ChangePasswordForm
						onSubmit={this.onSubmitChangePassword}
						formFields={formValues}
					/>
				),
				disabled: false,
				notification: {
					stringId: "ACCOUNT_SECURITY.CHANGE_PASSWORD.ACTIVE",
					text: STRINGS["ACCOUNT_SECURITY.CHANGE_PASSWORD.ACTIVE"],
					status: 'success',
					iconPath: ICONS["GREEN_CHECK"],
					iconId: "GREEN_CHECK",
					allowClick: true
				}
			},
			{
				stringId: "DEVELOPER_SECTION.TITLE",
				title: STRINGS["DEVELOPER_SECTION.TITLE"],
				content: (
					<DeveloperSection
						otp_enabled={otp_enabled}
						openOtp={this.openOtp}
						verification_level={verification_level}
					/>
				),
				disabled: false,
				notification: {
					// text: STRINGS[`DEVELOPER_SECTION.${otp_enabled ? 'ACTIVE' : 'INACTIVE'}`],
					status: otp_enabled ? 'success' : 'disabled',
					iconId: "TOKENS_ACTIVE,TOKENS_INACTIVE",
					iconPath: otp_enabled
						? ICONS["TOKENS_ACTIVE"]
						: ICONS["TOKENS_INACTIVE"], // TODO check
					allowClick: true
				}
			}
		];

		this.setState({ sections });
	};

	handleOTPCheckbox = (checked = false) => {
		if (checked) {
			this.props.requestOTP();
		} else {
			// TODO cancel otp
			this.setState({ dialogIsOpen: true, modalText: '', stringId: '' });
		}
	};

	onSubmitActivateOtp = (values) => {
		return otpActivate(values)
			.then((res) => {
				this.props.otpSetActivated(true);
				this.accordion.closeAll();
				this.setState({
					dialogIsOpen: true,
					modalText: STRINGS["ACCOUNT_SECURITY.OTP.DIALOG.SUCCESS"],
					stringId: "ACCOUNT_SECURITY.OTP.DIALOG.SUCCESS",
				});
			})
			.catch((err) => {
				const _error = err.response.data
					? err.response.data.message
					: err.message;
				throw new SubmissionError({ code: _error });
			});
	};

	onSubmitChangePassword = (values) => {
		return resetPassword({
			old_password: values.old_password,
			new_password: values.new_password
		})
			.then((res) => {
				this.accordion.closeAll();
				this.setState({
					dialogIsOpen: true,
					modalText:
						STRINGS["ACCOUNT_SECURITY.CHANGE_PASSWORD.DIALOG.SUCCESS"],
					stringId: "ACCOUNT_SECURITY.CHANGE_PASSWORD.DIALOG.SUCCESS",
				});
			})
			.catch((err) => {
				const _error = err.response.data
					? err.response.data.message
					: err.message;
				throw new SubmissionError({ _error });
			});
	};

	onSubmitCancelOTP = (values) => {
		return otpRevoke({ code: values.otp_code })
			.then(() => {
				this.props.otpSetActivated(false);
				this.setState({
					dialogIsOpen: true,
					modalText: STRINGS["ACCOUNT_SECURITY.OTP.DIALOG.REVOKE"],
					stringId: "ACCOUNT_SECURITY.OTP.DIALOG.REVOKE",
				});
			})
			.catch(errorHandler);
	};

	setRef = (el) => {
		this.accordion = el;
	};

	openOtp = () => {
		this.accordion.openSection(2, false);
		setTimeout(() => {
			this.accordion.openSection(0);
		}, 250);
	};

	openDevelopers = () => {
		setTimeout(() => {
			this.accordion.openSection(2);
		}, 250);
	};

	renderModalContent = () => {
		return (
			<SuccessDisplay
				onClick={this.onCloseDialog}
				text={this.state.modalText}
			/>
		);
	};

	onCloseDialog = () => {
		this.setState({ dialogIsOpen: false });
	};

	renderModalContent = (
		{ requested, activated, secret, error },
		otp_enabled,
		email,
		modalText,
		constants
	) => {
		const { icons: ICONS, stringId } = this.props;
		if (error) {
			return (
				<SuccessDisplay
					onClick={this.onCloseDialog}
					text={error}
					success={false}
				/>
			);
		} else if (otp_enabled && !modalText) {
			return <OtpForm onSubmit={this.onSubmitCancelOTP} />;
		} else if (requested && !activated) {
			return renderOTPForm(secret, email, this.onSubmitActivateOtp, constants, ICONS);
		} else {
			return (
				<SuccessDisplay
					onClick={this.onCloseDialog}
					stringId={stringId}
					text={modalText}
					success={!error}
				/>
			);
		}
	};

	render() {
		if (this.props.user.verification_level === 0) {
			return <Loader />;
		}
		const { sections, dialogIsOpen, modalText } = this.state;
		const { otp, email, otp_enabled } = this.props.user;
		return (
			<div>
				{!isMobile && (
					<IconTitle
						stringId="ACCOUNTS.TAB_SECURITY"
						text={STRINGS["ACCOUNTS.TAB_SECURITY"]}
						textType="title"
					/>
				)}
				<Accordion sections={sections} ref={this.setRef} />
				<Dialog
					isOpen={dialogIsOpen && !otp.requesting}
					label="security-modal"
					onCloseDialog={this.onCloseDialog}
					showCloseText={!(otp.error || modalText)}
					theme={this.props.activeTheme}
				>
					{dialogIsOpen && !otp.requesting ? (
						this.renderModalContent(
							otp,
							otp_enabled,
							email,
							modalText,
							this.props.constants
						)
					) : (
						<div />
					)}
				</Dialog>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	activeLanguage: state.app.language,
	activeTheme: state.app.theme,
	constants: state.app.constants
});

const mapDispatchToProps = (dispatch) => ({
	requestOTP: () => dispatch(otpRequest()),
	otpSetActivated: (active) => dispatch(otpSetActivated(active))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withConfig(UserVerification))
