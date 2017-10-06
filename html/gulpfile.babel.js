import gulp from 'gulp'
import sass from 'gulp-sass'
import gulpConcat from 'gulp-concat'
import cleanCss from 'gulp-clean-css'
import del from 'del'


const SASS_FOLDER = 'styles/sass'
const CSS_FOLDER = 'styles/css'

const MAIN_SASS = `${SASS_FOLDER}/main.scss`

	

gulp.task('clean', () => {
	del(`${CSS_FOLDER}/main.css`)
})

gulp.task('styles', () => {
	gulp.src(MAIN_SASS)
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest(CSS_FOLDER))
})


gulp.task('default', () => {
	gulp.watch(`${SASS_FOLDER}/*.scss`, ['clean', 'styles'])
})