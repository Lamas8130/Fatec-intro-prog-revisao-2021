const  picker  =  datepicker ( seletor ,  opções )

const picker = new Pikaday({
    field: field3,
    trigger: field3,
    format: 'DD/MM/YYYY',
    showDaysInNextAndPreviousMonths: true,
    toString(date, format) {
      const day = `${date.getDate()}`
      const month = `${date.getMonth() + 1}`
      const year = `${date.getFullYear()}`
  
      return format
        .replace('DD', day.padStart(2, '0'))
        .replace('D', day)
        .replace('MM', month.padStart(2, '0'))
        .replace('M', month)
        .replace('YYYY', year)
        .replace('YY', year.substr(-2))
    },
    parse(format, dateString) {
      const parts = dateString.split('/')
      const day = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1
      const year = parseInt(parts[2], 10)
  
      return new Date(year, month, day)
    },
    i18n: {
      previousMonth: 'Anterior',
      nextMonth: 'Próximo',
      months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      weekdays: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
      ],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    }
  })