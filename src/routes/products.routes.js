import { Router } from 'express'
import { eliminandoProducto, getProductos, getProducto, nuevoProducto, ActualizandoProducto } from '../controllers/products.controllers.js'
const router = Router()

router.get('/productos', getProductos);
router.get('/productos/:id', getProducto);
router.post('/productos/', nuevoProducto);
router.put('/productos/:id', ActualizandoProducto);
router.delete('/productos/:id', eliminandoProducto);
export default router