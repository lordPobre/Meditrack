const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  try     {
    const citas = await Cita.findAll();
    res.json(citas);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaCita = await Cita.create(req.body);
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const cita = await Cita.findByPk(req.params.id);
    if (cita) {
      await cita.update(req.body);
      res.json(cita);
    } else {
      res.status(404).send('Cita no encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const numDeleted = await Cita.destroy({ where: { id: req.params.id } });
    if (numDeleted) {
      res.send('Cita eliminada');
    } else {
      res.status(404).send('Cita no encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
