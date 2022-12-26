function Detail() {
    return <h1>Detail</h1>
}
export default Detail;

//Home route에서는 기본적으로 로딩하거나 영화 리스트 전체를 보여주는 스크린 전체를 만듦
//router는 url을 보고있는 component고, 
//사용자가 클라이언트에 localhost:3000/을 요청한다면,
//router는 클라이언트에 Home Component를 보여준다.
//url 요청이 localhost:3000/movies/{movie.id}가 된다면, 
//router는 클라이언트에 Detail component를 보여줄 것이다.
