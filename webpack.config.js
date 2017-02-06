// 关于web_modules文件夹的说明：
// 有些时候，我们用到的第三方库并没有采用CommonJS或AMD规范，
// 没有提交到npm。这样的话，我们无法通过npm来下载，并通过require()来引用这些库。
// 但是将需要用到的第三方库存放在web_modules文件夹。那么之后，不需要做任何设置，
// 可以在我们的逻辑代码中使用require(‘xx.js’)并且使用了

var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');//清理目录插件

//这个插件的作用是依据一个简单的模板，帮你生成最终的HTML5文件，
//这个文件中自动引用了你打包后的JS文件。每次编译都在文件名中插入一个不同的哈希值。
var HtmlWebpackPlugin = require('html-webpack-plugin');

//某些情况，我们需要在页面中输出开发调试内容，
//但是又不想让这些调试内容在发布的时候泄露出去，那么我们可以采用魔力变量(magic globals)来处理。
//"scripts" "dev": "BUILD_DEV=1 webpack-dev-server --progress --colors", "build": "BUILD_PRERELEASE=1 webpack -p"
//使用方式：plugins: [definePlugin]  这样在js中可以if (__DEV__) {...}  if (__PRERELEASE__) {...}
// var definePlugin = new webpack.DefinePlugin({
//     __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
//     __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'true'))
// });

// 该插件会提取entry chunk中所有的 require('*.css') ，分离出独立的css文件。
// new ExtractTextPlugin([id: string], filename: string, [options])
// 一个entry生成一个文件，当多个entry的时候，可以用 [name]/[id]/[contenthash] 来生成多个文件
// id 插件实例的唯一标识，自动生成
// filename 输出的filename，可以通过 [name]/[id]/[contenthash] 自定义filename
// options.allChunks 提取所有的chunk（默认只提取initial chunk）
// options.disable disable该插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//合并公共代码 示例
//entry: {a: 'a.js',b: 'b.js',c: 'c.js',d: 'd.js'},
//plugins: [new CommonsChunkPlugin('part1.js', ['a', 'b']),new CommonsChunkPlugin('common.js', ['part1', 'c'])]
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// var px2rem = require('postcss-px2rem');
var title = 'taobao';
var plugins = [
  new webpack.BannerPlugin("create by laiyangde"),
    new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
        title: title,
        // filename: '/view/index.html',//用于生成的HTML文件的名称，默认是index.html。你可以在这里指定子目录。
        // favicon:'./src/img/favicon.ico', //favicon路径
        // filename:'/view/index.html',    //生成的html存放路径，相对于 path
        template:'./src/index.tmpl.html',    //html模板路径
        //注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 
        //或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
        // inject: true | 'head' | 'body' | false ,
        // hash:true,    //将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。
        // cache: true | false，如果为 true,// 这是默认值，仅仅在文件修改之后才会发布文件。
        // showErrors: true | false,// 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
        // chunks: '',//允许只添加某些块 (比如，仅仅 unit test 块)
        // chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
        // excludeChunks: 允许跳过某些块，(比如，跳过单元测试的块)
        minify:{    //压缩HTML文件
             // removeComments:true,    //移除HTML中的注释
             collapseWhitespace:false    //删除空白符与换行符
        }
    }),
    new ExtractTextPlugin("css/[name].css"),

    // 当我们经常使用jQuery等外部第三方库的时候，每个用到jQuery的JS文件的头部通过require('jquery')来依赖jQuery
    // 我们可以通过在配置文件中配置使用到的变量名，那么webpack会自动分析，并且在编译时帮我们完成这些依赖的引入。
    // new webpack.ProvidePlugin({
    //   // $ : 'jquery',//直接从node_modules中获取
    //   // Base: '../../base/index.js' //从文件中获取
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    // compress: {
    //         warnings: false
    //     },
    //     sourceMap:true,// 生成SourceMap文件，会导致编译过程变慢，默认true
    //     // test/include/exclude 使用一个或多个正则表达式来过滤要处理的文件
    //     except: ['$super', '$', 'exports', 'require'],    //排除关键字防止指定变量被改变
    //     exclude:/node_modules/
    // }),
    // new CleanPlugin('aaa'), //删除aaa目录及子目录及文件
];


module.exports = {
  // devtool: 'source-map',//配置生成Source Maps，选择合适的选项

  // 设置入口，entry有三种写法，每个入口称为一个chunk。
  // 字符串：entry: "./index/index.js"，配置模块会被解析为模块，并在启动时加载。chunk名为默认为main
  // 数组：entry: ['./src/mod1.js','./src/index.js',...] ：所有的模块按照配置顺序加载，合并到最后一个模块会被导出。chunk名默认为main
  // 对象：entry: {index: '...', login : [...] }：如果传入Object，则会生成多个入口打包文件，key是chunk名，value可以是字符串或数组。
    entry:  __dirname + "/src/js/index.js",

    // 配置输出目录
    output: {
      path: __dirname + "/"+title,//指定输出文件路径，通常设置为__dirname + ‘/build’,
      filename: "js/[name].js",//输出文件名称，有四种可选的变量[id]chunk的id [name]chunk名 [hash]编译哈希值 [chunkhash]chunk的hash值
      publicPath:'/',// 设置为想要的资源访问路径,如果没有设置，则默认从站点根目录加载。
      // sourceMapFilename:'[file].map'
    },
    resolve: {
      extensions: ['','.js','.css'], // 用于指明程序自动补全识别哪些后缀,extensions 第一个是空字符串! 对应不需要后缀的情况.
      alias: {
          // "Gao7": "../../lib/gao7"
          "lib":"../../lib"
      },
    },
    module: {//在配置文件里添加loader
      loaders: [
        {
            test: /\.json$/,//一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
            loader: "json",//loader的名称（必须）
            include:'',//手动添加必须处理的文件（文件夹）
            exclude:'',//屏蔽不需要处理的文件（文件夹）
            query:''//为loaders提供额外的设置选项（可选）
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|lib)/,
            loader: 'babel',//在webpack的module部分的loaders里进行配置即可
            //以下query说明:Babel其实可以完全在webpack.config.js中进行配置，但是考虑到babel具有非常多的配置选项
            //因此把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件中,webpack会自动调用.babelrc里的babel配置选项
            // query: {
            //   presets: ['es2015']  //['es2015','react']
            // }
          },
          { 
            //css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,
            //style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
            //postcss-loader来为CSS代码自动添加适应不同浏览器的CSS前缀
            test: /\.css$/,
            // loader: 'style!css!postcss'//添加对样式表的处理,注：感叹号的作用在于使同一文件能够使用不同类型的loader
            loader: ExtractTextPlugin.extract("style","css")+"!postcss"
          },
          {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=2048&name=images/[hash:8]-[name].[ext]'
          },
          {
　　　　　　test: /\.html$/,
　　　　　　loader: 'html-withimg-loader'//打包 HTML 文件中的图片资源
　　　　　}
      ]
    },
    //添加了此项，则表明从外部引入，内部不会打包合并进去
    externals: {
        '$': 'window.$',
        "jquery": 'window.jquery',
        //...
    },
  postcss: [
      require('autoprefixer'),//调用autoprefixer插件
      // px2rem({remUnit: 75}),
    ],
  plugins: plugins,
    devServer: {//webpack-dev-server服务配置
      contentBase: "./"+title,//默认会为根文件夹提供本地服务器,本例设置到“public"目录
      colors: true,//终端中输出结果为彩色
      historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      inline: true,//实时刷新
      port:80,
      host:'192.168.28.54'
    },
    watch: true,
    watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,// Check for changes every second
    ignored:/(node_modules|lib)/,
  } 
}