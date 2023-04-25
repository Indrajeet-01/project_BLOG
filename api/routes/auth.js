import espress from "express"
import { register,login,logout} from "../controllers/auth.js"


const router  = espress.Router()

router.post("/register",register)
router.post("/login", login)
router.post("/logout", logout)


 
export default router
























