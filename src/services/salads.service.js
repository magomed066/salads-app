import Service from './Service'

class SaladsService extends Service {
	async getSalads() {
		return await this.getData('salads')
	}

	async getSaladById(id) {
		return await this.getDataById('salad', id)
	}
}

export default new SaladsService()
