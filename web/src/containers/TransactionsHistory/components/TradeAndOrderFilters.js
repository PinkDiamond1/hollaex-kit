import React, { useState, useEffect } from 'react';
import { Select, Form, Row, DatePicker, Radio } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import moment from 'moment';

import { dateFilters } from '../filterUtils';
import STRINGS from '../../../config/localizedStrings';

const { Option } = Select;
const { RangePicker } = DatePicker;

const Filters = ({ pairs, onSearch, formName, activeTab }) => {
	const [form] = Form.useForm();
	const [click, setClick] = useState([]);
	const [customSel, setCustomSel] = useState(false);

	useEffect(() => {
		form.setFieldsValue({
			status: null,
			currency: null,
			size: 'all',
		});
		setCustomSel(false);
	}, [activeTab, form]);

	useEffect(() => {
		if (
			click.length &&
			!click.filter((d) => d === undefined).length &&
			form.getFieldValue('range').length &&
			!form.getFieldValue('range').filter((d) => d === undefined).length
		) {
			form.setFieldsValue({ range: click });
			onSearch(form.getFieldsValue());
		} else if (click.length && !form.getFieldValue('range').length) {
			form.setFieldsValue({ range: click });
			onSearch(form.getFieldsValue());
		}
	}, [click, form, onSearch]);

	const onValuesChange = (_, values) => {
		if (values) {
			if (values.size) {
				setCustomSel(false);
				const {
					[values.size]: { range },
				} = dateFilters;
				form.setFieldsValue({ range });
				values.range = range;
				if (_.range === undefined) {
					onSearch(values);
				}
			} else {
				if (_.range === undefined) {
					onSearch(values);
				}
			}
		}
	};

	const handleDateRange = (e) => {
		const data = {
			...form.getFieldsValue(),
			range: [],
		};
		if (!e) {
			onSearch(data);
		} else if (e && e.length > 1 && e[0] && e[1]) {
			const firstDate = moment(e[0]).format('DD/MMM/YYYY');
			const secondDate = moment(e[1]).format('DD/MMM/YYYY');
			if (firstDate !== secondDate) {
				setClick(e);
			}
		}
	};

	const Customselection = (e) => {
		const data = {
			...form.getFieldsValue(),
			range: [],
		};
		if (e === 'custom' && !customSel) {
			setCustomSel(true);
			form.setFieldsValue({
				size: '',
				range: [],
			});
			onSearch(data);
		} else {
			if (!click.length) {
				setCustomSel(false);
			}
		}
	};

	const checkExistDate = (rule, value, callback) => {
		if (value && value.length && value[0] && value[1]) {
			const firstDate = moment(value[0]).format('DD/MMM/YYYY');
			const secondDate = moment(value[1]).format('DD/MMM/YYYY');
			if (firstDate === secondDate) {
				callback('Select a duration of time that is at least 1 day in length');
			} else {
				callback();
			}
		}
	};

	return (
		<Form
			form={form}
			name={`${formName}-filters`}
			className="ant-advanced-search-form"
			onValuesChange={onValuesChange}
			initialValues={{
				symbol: null,
				size: 'all',
				type: 'active',
			}}
		>
			<Row gutter={24}>
				{formName === 'orders' ? (
					<Form.Item
						name="type"
						label={STRINGS['ORDER_TYPE']}
						rules={[
							{
								message: 'Input something!',
							},
						]}
					>
						<Select
							style={{
								width: 100,
							}}
							size="small"
							className="custom-select-input-style elevated"
							dropdownClassName="custom-select-style"
							bordered={false}
							suffixIcon={<CaretDownOutlined />}
						>
							<Option value="active">
								{STRINGS['DEVELOPER_SECTION.ACTIVE']}
							</Option>
							<Option value="closed">{STRINGS['ORDER_HISTORY_CLOSED']}</Option>
						</Select>
					</Form.Item>
				) : null}
				<Form.Item
					name="symbol"
					label={STRINGS['PAIR']}
					rules={[
						{
							message: 'Input something!',
						},
					]}
				>
					<Select
						style={{
							width: 100,
						}}
						size="small"
						className="custom-select-input-style elevated"
						dropdownClassName="custom-select-style"
						bordered={false}
						suffixIcon={<CaretDownOutlined />}
					>
						<Option value={null}>{STRINGS['ALL']}</Option>
						{Object.entries(pairs).map(
							([_, { name, pair_base_display, pair_2_display }]) => (
								<Option key={name} value={name}>
									{`${pair_base_display}-${pair_2_display}`}
								</Option>
							)
						)}
					</Select>
				</Form.Item>
				<Form.Item name="size">
					<Radio.Group buttonStyle="outline" size="small">
						{Object.entries(dateFilters).map(([key, { name }]) => (
							<Radio.Button key={key} value={key}>
								{name}
							</Radio.Button>
						))}
					</Radio.Group>
				</Form.Item>
				<Form.Item
					name="custom"
					buttonStyle="outline"
					size="small"
					onClick={() => Customselection('custom')}
					className={customSel ? 'cusStyle1' : 'cusStyle2'}
				>
					Custom
				</Form.Item>
				{customSel && (
					<Form.Item
						name="range"
						rules={[
							{
								validator: checkExistDate,
							},
						]}
					>
						<RangePicker
							allowEmpty={[true, true]}
							size="small"
							suffixIcon={false}
							placeholder={[STRINGS['START_DATE'], STRINGS['END_DATE']]}
							onChange={handleDateRange}
						/>
					</Form.Item>
				)}
			</Row>
		</Form>
	);
};

export default Filters;
