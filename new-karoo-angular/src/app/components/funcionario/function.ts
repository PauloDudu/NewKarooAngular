export const logOut = () => {
    window.localStorage.clear();
    window.location.reload();
}