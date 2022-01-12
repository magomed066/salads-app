import Service from './Service'

class SaladsService extends Service {
	async getSalads() {
		return this.getData('salads')
	}
}

export default new SaladsService()
