import axios from 'axios'

class Service {
	API_URL = 'http://test-job.webatom.ru'

	async getData(value) {
		const { data } = await axios.get(`${this.API_URL}/${value}`)

		return data
	}

	async getDataById(value, id) {
		const { data } = await axios.get(`${this.API_URL}/${value}/${id}`)

		return data
	}
}

export default Service
