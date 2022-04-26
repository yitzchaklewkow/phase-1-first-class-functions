function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const func = () => {};
    return func;
}

function returnsAnAnonymousFunction(){
    return () => {};
}