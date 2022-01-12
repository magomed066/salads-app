import Service from './Service'

class MoleculesService extends Service {
	async getMolecules() {
		return this.getData('molecules')
	}
}

export default new MoleculesService()
