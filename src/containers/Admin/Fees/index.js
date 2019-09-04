import React, { Component } from 'react';
import { Card, Alert } from 'antd';
import { isSupport } from '../../../utils';

import { getFees } from './actions';
import { formatCurrency } from '../../../utils';

class BlockchainTransaction extends Component {
	state = {
		data: {},
		loading: true,
		error: ''
	};

	componentWillMount() {
		if (!isSupport()) {
			getFees()
				.then((data) => {
					console.log(data);
					this.setState({
						loading: false,
						data
					});
					console.log(data);
				})
				.catch((error) => {
					const message = error.data ? error.data.message : error.message;
					this.setState({
						loading: false,
						error: message
					});
				});
		} else {
			this.setState({
				loading: false
			});
		}
	}

	render() {
		const { error, data, loading } = this.state;
		return (
			<div className="app_container-content">
				{loading && <div />
					// <Spin size="large" />
				}
				{error && (
					<Alert
						message="Error"
						className="m-top"
						description={error}
						type="error"
						showIcon
					/>
				)}
				{data.fees && (
					<div className="list-group m-top">
						<Card
							className="card-title"
							title="Fees"
							style={{ textAlign: 'center' }}
						>
							{Object.entries(data.fees).map(([currency, amount], index) => (
								<div key={index} className="list-group-item list-group-item-action">
									{currency.toUpperCase()} : {formatCurrency(amount)}
								</div>
							))}
						</Card>

						<Card
							className="card-title m-top"
							title="Quick Trades  Fees"
							style={{ textAlign: 'center' }}
						>
							{Object.entries(data.trades).map(([currency, amount], index) => (
								<div key={index} className="list-group-item list-group-item-action">
									{currency.toUpperCase()} : {formatCurrency(amount)}
								</div>
							))}
						</Card>
					</div>
				)}
			</div>
		);
	}
}

export default BlockchainTransaction;
