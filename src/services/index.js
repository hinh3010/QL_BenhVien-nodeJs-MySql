import create from "./create"
import fetchAll from "./fetchAll"
import fetchOne from "./fetchOne"
import remove from "./remove"

const services = {
    fetchAll: fetchAll,
    fetchOne: fetchOne,
    create: create,
    remove: remove
}

export default services