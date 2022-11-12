function adminMiddleware(req, res, next) {
    if(res.locals.userLogged && res.locals.userLogged.roleId == 1) {
        next();
    }

}

module.exports = adminMiddleware;