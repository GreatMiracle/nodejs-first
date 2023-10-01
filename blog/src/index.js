const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('__dirname1: ', path.join(__dirname, 'resources', 'views'));

// Tạo một instance của express-handlebars và cấu hình nó
const hbs = exphbs.create({
  defaultLayout: 'main', // Tên layout mặc định (main.handlebars)
  extname: '.handlebars', // Phần mở rộng cho tệp giao diện
  layoutsDir: path.join(__dirname, 'resources', 'views'), // Thư mục chứa các layout
  // partialsDir: path.join(__dirname, 'resources', 'views', 'partials'), // Thư mục chứa các partials
});

app.engine('handlebars', hbs.engine);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require('express');
// const morgan = require('morgan');
// const exphbs = require('express-handlebars'); // Thay thế handlebars bằng express-handlebars
// const path = require('path');

// const app = express();
// const port = 3000;

// // Sử dụng middleware morgan để ghi log
// app.use(morgan('combined'));

// // Cấu hình express-handlebars
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'resources', 'views'));

// // Đường dẫn tới thư mục chứa tệp giao diện
// console.log('__dirname: ', path.join(__dirname, 'resources', 'views'));

// // Route gốc
// app.get('/', (req, res) => {
//   res.render('home');
// });

// // Lắng nghe cổng
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
