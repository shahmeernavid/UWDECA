var fs = require('fs'),
		_ = require('underscore'),
		browserify = require('browserify');


var getFiles = function (dir){
	return _.map(_.reject(fs.readdirSync(dir), function (path){
	  return (/(^|.\/)\.+[^\/\.]/g).test(path);
	}), function (file){
		return dir + file; 
	});
};

var concat = function (dirsOrFiles){

	if (!Array.isArray(dirsOrFiles)){
		dirsOrFiles = [dirsOrFiles];
	}

	var output = '';
	_.each(dirsOrFiles, function (elem){
		if(fs.statSync(elem).isFile() && elem.indexOf('.DS_STORE') == -1){
			output += fs.readFileSync(elem) + '\n';
		}
		else if(fs.statSync(elem).isDirectory()){
			var files = getFiles(elem);
			_.each(files, function (file){
				if(fs.statSync(file).isFile() && file.indexOf('.DS_STORE') == -1){
					output += fs.readFileSync(file) + '\n';
				}
			});
		}
		else if(elem.indexOf('.DS_STORE') == -1){
			throw new Error('Incorrect input into concat! - one of the list items was neither a dir or file');
		}
	});
	
	return output;
};


// TODO: minification
// TODO: watch
desc('Compiles js and css files into two');
task('compile', function (){
	var utils = _.filter(getFiles('./lib/js/utilities/'), function (elem){return elem != './lib/js/utils/private'; }),
			components = [
				'./lib/bower_components/jquery/dist/jquery.min.js',
				'./lib/bower_components/moment/min/moment.min.js',
				'./lib/bower_components/fullcalendar/dist/fullcalendar.min.js',
				'./lib/bower_components/fullcalendar/dist/gcal.js',
				'./lib/bower_components/angular/angular.min.js',
				'./lib/bower_components/angular-route/angular-route.min.js',
				'./lib/js/bootstrap.min.js',
				'./lib/js/angular-bootstrap-templates.js'
			],
			js_list = [
				'./lib/js/angular/init.js',
				'./lib/js/angular/controllers/',
				'./lib/js/angular/services/',
				'./lib/js/angular/directives/'
			];

	// temporary file of all angular code
	// TODO: find a way to do this without creating file
	fs.writeFileSync('./public/js/main.temp.js', concat(js_list));
	var browserified = browserify('./public/js/main.temp.js');
	browserified.bundle(function (err, browserifiedCode){
		if (err) {
			throw err;
		}
		// delete temp file
		fs.unlinkSync('./public/js/main.temp.js');
		
		fs.writeFileSync('./public/js/main.js', concat(components) + browserifiedCode);

		var cssOutput = concat([
			'./lib/css/reset.css',
			'./lib/css/bootstrap.min.css',
			'./lib/bower_components/fullcalendar/dist/fullcalendar.min.css',
			'./lib/css/style.css'
		]);

		fs.writeFileSync('./public/css/style.css', cssOutput);
	}); 
	
});