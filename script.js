var app = new Vue({
  el: '#app',
  data: {
    cep: '',
    endereco: {},
    naoLocalizado: false },

  mounted: function () {
    $("#inputCep").mask("00000-000");
  },
  methods: {
    registrar: function () {
      // processar dados
    },
    buscar: function () {
      var self = this;

      self.naoLocalizado = false;

      if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
        $.getJSON("https://viacep.com.br/ws/" + this.cep + "/json/", function (endereco) {
          if (endereco.erro) {
            self.endereco = {};
            $("#inputLogradouro").focus();
            self.naoLocalizado = true;
            return;
          }
          self.endereco = endereco;
          console.log(endereco);
          $("#inputNumero").focus();
        });
      }
    } } });