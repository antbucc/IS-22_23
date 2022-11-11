class Responder

  # All went well, and (usually) some data is returned.
  success: (req, res, data) ->
  
  # There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied
  # API returns errors to be reported.
  fail:   (req, res, errors) ->

  # An error occurred in processing the request, i.e. an exception was thrown.
  error:  (req, res, error) ->

module.exports = Responder