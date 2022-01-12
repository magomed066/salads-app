import Service from './Service'

class MoleculesService extends Service {
	async getMolecules() {
		return await this.getData('molecules')
	}
}

export default new MoleculesService()
