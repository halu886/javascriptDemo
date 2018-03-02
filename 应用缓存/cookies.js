var CookieUtil = {
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += ";expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }

        if (domain) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },
    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
}

CookieUtil.set("name", "Nicholas");
CookieUtil.set("book", "Profession Javascript");

console.log(CookieUtil.get("name"));
console.log(CookieUtil.get("book"));

CookieUtil.unset("name");
CookieUtil.unset("book");

var SubCookieUtil = {
    get: function (name, subName) {
        var subCookies = this.getAll(name);
        if (subCookies) {
            return subCookies[name];
        } else {
            return null;
        }
    },
    getAll: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookie,
            i,
            parts,
            result = {};
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substr(cookieStart + cookieName.length, cookieEnd);
            if (cookieValue > 0) {
                subCookie = cookieValue.split("&");
                for (i = 0, len = subCookie.length; i < len; i++) {
                    parts = subCookie[i].split("=");
                    result[encodeURIComponent(parts[0])] = encodeURIComponent(parts[1]);
                }
                return result;
            }
        }
        return null;
    }
}

var data = subCookieUtil.getAll("data");
console.log(data.name);
console.log(data.book);

console.log(subCookieUtil.get())