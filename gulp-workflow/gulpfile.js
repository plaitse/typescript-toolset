const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

// Gulp 3 - "build": "gulp" in package.json

gulp.task("typescript", function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest("")); // Output in the root folder
});

gulp.task("watch", function() {
  // Watch for all typescript files changes and run the "typescript" task
  gulp.watch("src/*.ts", gulp.series("typescript"));
});

gulp.task("default", gulp.series("watch"));

// Gulp 4 - "build": "gulp watch" in package.json

// function typescript() {
//   return tsProject
//     .src()
//     .pipe(tsProject())
//     .pipe(gulp.dest(""));
// }

// function watch() {
//   gulp.watch("*.ts", typescript);
// }

// exports.typescript = typescript;
// exports.watch = watch;
