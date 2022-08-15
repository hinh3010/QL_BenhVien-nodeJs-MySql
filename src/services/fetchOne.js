const fetchOne = async ({ Model, where, raw = true }) => {
    try {
        const resp = await Model.findOne({
            where: where,
            raw: raw
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

export default fetchOne