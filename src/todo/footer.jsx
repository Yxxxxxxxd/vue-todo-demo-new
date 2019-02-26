import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      autos: 'yxd'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.autos}</span>
      </div>
    )
  }
}