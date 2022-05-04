module.exports = {
  async indexGet(re, res) {
    await res.status(200).render('index');
  },
};
