import mongoose from 'mongoose';

const config = require('./config');

// mongoose.set('debug', true);
mongoose.Promise = require('bluebird');
mongoose.set('useCreateIndex', true);

const mongooseProps = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose.connect(config.mongoose.uri, mongooseProps, (err) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('-- Mongoose connect --');
  };
}), config.mongoose.options;


export default mongoose;