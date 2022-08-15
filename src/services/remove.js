const remove = async ({ Model, where }) => {
    try {
        const obj = await Model.findOne({
            where: where,
        })
        const resp = await obj.destroy()
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

export default remove