'use strict';

$(function() {
  $('.createburger').on('click', function(event) {
    const id = $(this).data('id');
    const createBurger = $(this).data('new');

    const createBurgerState = {
       createBurger
    }

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newBurgerState
    }).then(function() {
      console.log('changed burger to', createBurger);
    
      location.reload();
    });
  });

  $('.create-form').on('submit', function(event) {

    event.preventDefault();

    const newBurger = {
      name: $('#burger')
        .val()
        .trim(),
      good: $('[name=good]:checked')
        .val()
        .trim()
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: createBurger
    }).then(function() {
      console.log('created new burger');

      location.reload();
    });
  });

  $('.delete-burger').on('click', function(event) {
    const id = $(this).data('id');
    $.ajax('/api/burgers/' + id, {
      type: 'DELETE'
    }).then(function() {
      console.log('deleted burgers', id);
      location.reload();
    });
  });
});