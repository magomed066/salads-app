export default function filterData(arrOfData, arrOfIds) {
	return arrOfData.filter((item) => arrOfIds.indexOf(item._id) !== -1)
}
