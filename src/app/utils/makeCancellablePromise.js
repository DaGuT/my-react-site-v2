// this function is used to create cancellable promise that will be used in
// componentwillunmount
const makeCancelablePromise = (promise) => {
    let hasCanceled_ = false;
    let remoteReject;

    const wrappedPromise = new Promise((resolve, reject) => {
      remoteReject = reject;
      promise.then(val => hasCanceled_
        ? reject({isCanceled: true})
        : resolve(val), error => hasCanceled_
        ? reject({isCanceled: true})
        : reject(error));
    });

    wrappedPromise.cancel = () => {
      hasCanceled_ = true;
      remoteReject({isCanceled: true});
      return promise;
    }
  
    return wrappedPromise;
  };


  export default makeCancelablePromise;