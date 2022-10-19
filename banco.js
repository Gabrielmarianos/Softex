var banco = {
  conta: "35.219-14",
  saldo: 500,
  tipo: "corrente",
  agencia: "321-0",

  getSaldo: function () {
    console.log("O saldo da conta é: R$", banco.saldo);
  },

  getDeposito: function (deposito) {
    banco.saldo = banco.saldo + deposito;
    console.log("Saldo após o deposito: R$", banco.saldo);
  },

  getSaque: function (saque) {
    banco.saldo = banco.saldo - saque;
    console.log("Saldo após o saque: R$", banco.saldo);
  },

  getNumero_conta: function () {
    console.log("O número da conta é: ", banco.conta);
  },
};
