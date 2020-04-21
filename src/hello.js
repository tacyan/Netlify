import moment from 'moment'

exports.handler = funciton(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: moment().format()
    });
}