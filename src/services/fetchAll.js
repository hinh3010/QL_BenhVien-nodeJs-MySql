const fetchAll = async ({ Model }) => {
    try {
        const resp = await Model.findAll({
            raw: true
        })
        return {
            resp: resp,
            err: null
        }
    } catch (error) {
        return {
            resp: null,
            err: error.message
        }
    }
}

export default fetchAll