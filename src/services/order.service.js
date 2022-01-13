import Service from './Service'

class OrderService extends Service {
	async createOrder(order) {
		return await this.postData(order)
	}
}

export default new OrderService()
