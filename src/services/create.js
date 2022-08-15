const create = async ({ Model, data }) => {
    try {
        const resp = await Model.create(data)
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

export default create