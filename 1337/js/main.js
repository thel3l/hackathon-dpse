var API_PREFIX = 'https://api.github.com/repos/thel3l/hackathon-dpse/git',
    // e = "root&#64;codefest";
    e = "[[b;#C94D18;]root]@[[b;#0099CC;]codefest]";

var GitHub = new (function() {
    this.fs = new Object;
    this.loaded = false;
    this.stack = new Array;

    this.getCurrentPath = function(){
        if(this.stack.length == 0)
            return '~/';
        return this.stack.join('/')
    },
    this.getCurrentWorkingDirectory = function() {
        if(this.stack.length == 0)
            return this.fs;

        var fs = this.fs
        for(var i in this.stack) {
            fs = fs[this.stack[i]];
        }
        return fs;
    };

        var user_ip = '', i;

    var self = this;
    $.getJSON(API_PREFIX + '/refs/heads/master', function(data, textStatus, jqXHR){
    //$.getJSON('data/master.json', function(data, textStatus, jqXHR){
        var sha = data.object.sha;
        $.getJSON(API_PREFIX + '/trees/'+sha+'?recursive=1', function(data, textStatus, jqXHR){
        //$.getJSON('data/tree.json', function(data, textStatus, jqXHR){
            for(i in data.tree) {
                var item = data.tree[i];
                var paths = item.path.split('/');

                var fs = self.fs;
                for(var i=0; i< paths.length; i++) {
                    var path = paths[i];

                    if(!fs.hasOwnProperty(path)) {
                       fs[path] = new Object;
                    } else {
                       fs = fs[path]
                    }

                    if (i == paths.length-1) {
                        item.path = path;
                        fs[path] = item;
                    }
                }
            }
            self.loaded = true;
        });
    });
})();

var App = {
    echo: function(text) {
        this.echo(text);
user_ip = '';
        // if(ga != undefined) ga('send', 'event', 'echo', GitHub.getCurrentPath(), 'text', text);
    },
    help: function() {
        this.echo("Available commands:");
        this.echo("\tabout       information about this page");
        this.echo("\tcontact     display contact infomation");
        this.echo("\twhoami");
        this.echo("\thelp        this help screen.");
        this.echo("");
        this.echo("Other commands available: cat cd id ls startx")

        // if(ga != undefined) ga('send', 'event', 'help', GitHub.getCurrentPath());
    },
    whoami: function() {
  //     this.echo(navigator.userAgent);
  // this.echo(user_ip);
  // this.echo(user_city + ', ' + user_country);
  // this.echo('<a href="https://www.google.com/maps/place/' + user_lat + ',' + user_long + '" target="_blank">' + user_lat + ',' + user_long + '</a>', {raw:true});
},
    nano: function(){


    },
    contact: function() {
        this.echo("Get in touch via:\n")
        this.echo("Email: info@dpse.cf\n");
        this.echo("GitHub: @thel3l");
        this.echo("GitHub: @rithvikvibhu");
        this.echo("GitHub: @lunaroyster");

        // if(ga != undefined) ga('send', 'event', GitHub.getCurrentPath(), 'contact');
    },
    about: function() {
        this.echo("\nCoded with ❤ by @thel3l @lunaroyster @rithvikvibhu\n", {raw:true});

        // if(ga != undefined) ga('send', 'event', 'about', GitHub.getCurrentPath());
    },
    id: function(){
        this.echo("uid=1000(tui) gid=1000(tui)");

        // if(ga != undefined) ga('send', 'event', 'id', GitHub.getCurrentPath());
    },
    ls: function() {
        var wd = GitHub.getCurrentWorkingDirectory();
        for(i in wd) {
            if(typeof wd[i] == 'object') {
                var item = wd[i];
                this.echo(item.mode+'\t' + (item.type=='tree'?'[[b;#44D544;]'+item.path+']':item.path));
            }
        }

        // if(ga != undefined) ga('send', 'event', 'ls', GitHub.getCurrentPath());
    },
    cd: function(path) {
        if(path == '..') {
            GitHub.stack.pop();
            return;
        }
        var wd = GitHub.getCurrentWorkingDirectory();
        var item = wd[path]
        if(!item) {
            this.error("cd: " + path + ": No such file or directory");
        } else if(item.type != 'tree') {
            this.error("cd: " + path  + ": Not a directory");
        } else {
            GitHub.stack.push(path);
        }

        // if(ga != undefined) ga('send', 'event', 'cd', GitHub.getCurrentPath(), 'path', path);
    },
    cat: function(path){
        var wd = GitHub.getCurrentWorkingDirectory();
        var item = wd[path];
        if(!item) {
            this.error("cat: " + path + ": No such file or directory");
        } else if(item.type == 'tree') {
            this.error("cat: " + path  + ": Is a directory");
        } else {
            var term = this;
            term.pause();
            $.getJSON(item.url, function(data, textStatus, jqXHR){
                var content = data.content.trim()
                if(data.encoding == 'base64')
                    content = decode64(content);
                term.echo(content);
                term.resume();
            });
        }
        // if(ga != undefined) ga('send', 'event', 'cat', GitHub.getCurrentPath(), 'path', path);
    },
    startx: function() {
        this.error('xinit: unable to connect to X server: Resource temporarily unavailable\nxinit: server error');

        // if(ga != undefined) ga('send', 'event', 'startx', GitHub.getCurrentPath());
    },
    lel: function() {
        this.echo("-/..../.-/-/.----./...//-/...././/..././-.-./.-././-//.--/---/.-./-..//--/.-/-/./.-.-.--..-.//--./.-../.-/-..//-.--/---/..-//..-./---/..-/-./-..//../-/.-.-.--..-.////");
    },
}

jQuery(document).ready(function($) {
    $('body').terminal(App, {
        greetings: "[[b;#ffffff;]﻿████████▄     ▄███████▄    ▄████████         ▄████████    ▄████████    ▄████████     ███\n" +
                  " ███   ▀███   ███    ███   ███    ███        ███    ███   ███    ███   ███    ███ ▀█████████▄\n" +
                  " ███    ███   ███    ███   ███    █▀         ███    █▀    ███    ███   ███    █▀     ▀███▀▀██\n" +
                  " ███    ███ ▀█████████▀  ▀███████████      ▀▀███▀▀▀     ▀███████████ ▀███████████     ███\n" +
                  " ███    ███   ███                 ███        ███    █▄    ███    ███          ███     ███\n" +
                  " ███   ▄███   ███           ▄█    ███        ███    ███   ███    ███    ▄█    ███     ███\n" +
                  " ████████▀   ▄████▀       ▄████████▀         ██████████   ███    █▀   ▄████████▀     ▄████▀\n\n" +
            "Hello. If you are here, we suppose it means that you have some prior experience with the command line.\n This terminal emulator is linked to our github repo, which allows you to\n    -execute the programs to view the schedule\n    -read the rules, and most importantly \n    -READ THE README.md\n\n",
        prompt: function(p){
            var path = '~'
            if(GitHub.stack.length > 0) {
                for(i in GitHub.stack) {
                    path+= '/';
                    path+= GitHub.stack[i]
                }
            }
            ////////////////////////////////////////// p("root@codefest" + ":" + path + "# ");
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
    });
});
