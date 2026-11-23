// Mobile nav + mailto forms (no WordPress backend on the static site)
document.addEventListener('DOMContentLoaded', function () {
  var t = document.querySelector('.menu-toggle');
  if (t) t.addEventListener('click', function () {
    document.querySelector('nav.main').classList.toggle('open');
  });
  function mailto(formId, subjectFn, bodyFn) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var subject = subjectFn(v);
      var body = bodyFn(v);
      window.location.href = 'mailto:mail@fairgroundscommunities.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
  mailto('contact-form',
    function (v) { return 'Website Contact - ' + v('c-name'); },
    function (v) {
      return 'Name: ' + v('c-name') + '\nAddress: ' + v('c-address') +
        '\nEmail: ' + v('c-email') + '\nPhone Number: ' + v('c-phone') +
        '\n\nComments:\n' + v('c-comments');
    });
  mailto('maint-form',
    function (v) { return 'Maintenance Request - ' + v('m-property'); },
    function (v) {
      return 'Name: ' + v('m-name') + '\nEmail: ' + v('m-email') +
        '\nPhone: ' + v('m-phone') + '\nProperty: ' + v('m-property') +
        '\nCategory: ' + v('m-category') + '\n\nDescription:\n' + v('m-description');
    });
});
