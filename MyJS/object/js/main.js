"use strict";

{
  // // const score1 = 80;
  // // const score2 = 90;
  // // const score3 = 40;
  // const scores = [80, 90, 40];
  // console.log(scores);
  // const scores = [80, 90, 40];
  // // console.log(scores[1]);
  // // scores[2] = 44;
  // // console.log(scores);
  // // scores = 10;
  // console.log(scores.length);
  // const scores = [80, 90, 40, 70];
  // // console.log(`Score: ${scores[0]}`);
  // // console.log(`Score: ${scores[1]}`);
  // // console.log(`Score: ${scores[2]}`);
  // // for (let i = 0; i < 3; i++) {
  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }
  // const scores = [80, 90, 40, 70];
  // scores.push(60, 50);
  // scores.shift();
  // // 90, 40, 70, 60, 50
  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }
  // const scores = [80, 90, 40, 70];
  // scores.splice(1, 1, 40, 50);
  //80, 40, 50, 40, 70
  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }
  // const otherScores = [10, 20];
  // const scores = [80, 90, 40, 70, ...otherScores];
  // // console.log(scores);
  // function sum(a, b) {
  //   console.log(a + b);
  // }
  // sum(...otherScores);
  // // sum(10, 20);

  // const scores = [80, 90, 40, 70];

  // // const [a, b, c, d] = scores;
  // // console.log(a);
  // // console.log(b);
  // // console.log(c);
  // // console.log(d);

  // // const [a, b, ...others] = scores;
  // // console.log(a);
  // // console.log(b);
  // // console.log(others);

  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);

  // const scores = [80, 90, 40, 70];

  // // scores.forEach((score) => {
  // scores.forEach((score, index) => {
  //   console.log(`Score ${index}: ${score}`);
  // });

  // const prices = [180, 190, 200];
  // // const updatedPrices = prices.map((price) => {
  // //   return price + 20;
  // // });
  // const updatedPrices = prices.map(price => price + 20);
  // console.log(updatedPrices);

  // const numbers = [1, 4, 7, 8, 10];
  // // const evenNumbers = numbers.filter(number => {
  // //   if (number % 2 === 0) {
  // //     return true;
  // //   } else {
  // //     return false;
  // //   }
  // // });
  // const evenNumbers = numbers.filter(number => number % 2 === 0);
  // console.log(evenNumbers);

  // const point = [100, 180];
  // const point = {x: 100, y: 180};
  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  // console.log(point);

  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  // point.x = 120;
  // // point['x'] = 120;

  // // console.log(point.x);
  // // console.log(point['y']);
  // point.z = 90;
  // delete point.y;
  // console.log(point);

  // const otherProps = {
  //   r: 4,
  //   color: 'red',
  // };
  // const point = {
  //   x: 100,
  //   y: 180,
  //   ...otherProps,
  // };
  // // console.log(point);
  // const {x, r, ...others} = point;
  // console.log(x);
  // console.log(r);
  // console.log(others);

  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  // // const keys = Object.keys(point);
  // // keys.forEach(key => {
  // //   console.log(`Key: ${key} Value: ${point[key]}`);
  // // });
  // const points = [
  //   {x: 30, y: 20},
  //   {x: 10, y: 50},
  //   {x: 40, y: 40},
  // ];
  // console.log(points[1].y);

  // // let x = 1;
  // // let y = x;
  // // x = 5;
  // // console.log(x); // 5
  // // console.log(y); // 1
  // // let x = [1, 2];
  // // let y = x;
  // // x[0] = 5;
  // // console.log(x); // [5, 2]
  // // console.log(y); // [5, 2]
  // let x = [1, 2];
  // let y = [...x];
  // x[0] = 5;
  // console.log(x); // [5, 2]
  // console.log(y); // [1, 2]

  // const str = 'hello';
  // // console.log(str.length);
  // // str.substring(開始位置, 終了位置);
  // // console.log(str.substring(2, 4));
  // console.log(str[1]);
  // // str[1] = 'a';

  // const d = [2019, 11, 14];
  // // console.log(d.join('/'));
  // // console.log(d.join(''));
  // const t = '17:08:24';
  // // console.log(t.split(':'));
  // const [hour, minute, second] = t.split(':');
  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  // const scores = [10, 3, 9];
  // let sum = 0;
  // scores.forEach(score => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // // console.log(sum);
  // // console.log(avg);
  // // console.log(Math.floor(avg)); // 7
  // // console.log(Math.ceil(avg)); // 8
  // // console.log(Math.round(avg)); // 7
  // // console.log(avg.toFixed(3)); // 7.333
  // console.log(Math.random());

  //   // console.log(Math.random());
  //   // 0, 1, 2
  //   // Math.floor(Math.random() * 3)
  //   // 0, ..., n
  //   // Math.floor(Math.random() * (n + 1))
  //   // min, ..., max
  //   // Math.floor(Math.random() * (max + 1 - min)) + min
  //   console.log(Math.floor(Math.random() * 6) + 1);

  // const d = new Date();
  //   // console.log(d);
  //   console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);

  // const d = new Date(2019, 10); // 2019/11/01 00:00:00
  // d.setHours(10, 20, 30); // 2019/11/01 10:20:30
  // d.setDate(31); // 2019/12/01 10:20:30
  // d.setDate(d.getDate() + 3); // 2019/12/04 10:20:30
  // console.log(d);

  // // alert('hello');
  // const answer = confirm('削除しますか？');
  // if (answer) {
  //   console.log('削除しました');
  // } else {
  //   console.log('キャンセルしました');
  // }

  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }
  // const intervalId = setInterval(showTime, 1000);

  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutId);
  //   }
  // }
  // showTime();

  // // const name = 'taguchi';
  // const name = 5;
  // try {
  //   console.log(name.toUpperCase());
  // } catch (e) {
  //   console.log(e);
  // }
  // console.log('Finish!');

  // const posts = [
  //   {
  //     text: "javascriptの勉強中...",
  //     likeCount: 0,
  //   },
  //   {
  //     text: "プログラミング楽しい",
  //     likeCount: 0,
  //   },
  // ];
  // function show(post) {
  //   console.log(`${post.text} - ${post.likeCount}いいね`);
  // }
  // posts.forEach((post) => {
  //   show(post);
  // });

  // const posts = [
  //   {
  //     text: "javascriptの勉強中...",
  //     likeCount: 0,
  //     // show: function() {
  //     //   console.log(`${this.text} - ${this.likeCount}いいね`);
  //     // }
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     }
  //   },
  //   {
  //     text: "プログラミング楽しい",
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     }
  //   },
  // ];
  // posts[0].show();
  // posts[1].show();

  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }
  //   show() {
  //     console.log(`${this.text} - ${this.likeCount}いいね`);
  //   }
  // }
  // const posts = [
  //   new Post("javascriptの勉強中..."),
  //   new Post("プログラミング楽しい"),
  // ];
  // posts[0].show();
  // posts[1].show();

  //   class Post {
  //     constructor(text) {
  //       this.text = text;
  //       this.likeCount = 0;
  //     }
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}likes`);
  //     }
  //     like() {
  //       this.likeCount++;
  //       this.show();
  //     }

  //     static showInfo() {
  //       console.log("Post class version 1.0");
  //     }
  //   }

  //   class SponsoredPost {
  //     constructor(text, sponsor) {
  //       this.text = text;
  //       this.likeCount = 0;
  //       this.sponsor = sponsor;
  //     }
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}likes`);
  //       console.log(`...sponsored by ${this.sponsor}`);
  //     }
  //     like() {
  //       this.likeCount++;
  //       this.show();
  //     }
  //   }

  //   const posts = [
  //     new Post("javascriptの勉強中..."),
  //     new Post("プログラミング楽しい"),
  //     new SponsoredPost("3分動画でマスターしよう", "dotinstall"),
  //   ];
  //   // posts[0].show();
  //   // posts[1].show();
  //   // posts[0].like();
  //   // Post.showInfo();
  //   posts[2].show();
  // }

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }
    like() {
      this.likeCount++;
      this.show();
    }

    static showInfo() {
      console.log("Post class version 1.0");
    }
  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }
    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post("javascriptの勉強中..."),
    new Post("プログラミング楽しい"),
    new SponsoredPost("3分動画でマスターしよう", "dotinstall"),
  ];
  // posts[0].show();
  // posts[1].show();
  // posts[0].like();
  // Post.showInfo();
  posts[2].show();
}
