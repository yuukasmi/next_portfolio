const hoverProvider = WrappedComponent => {
    return class HoverProviderComponent extends React.Component {
      constructor(props) {
        super(props)
  
        this.state = {
          isHover: false,
        }
      }
  
      onMouseEnter = e => {
        const { onMouseEnter } = this.props
        if (onMouseEnter) onMouseEnter(e)
        if (isTouchDevice) return
        this.setState({ isHover: true })
      }
  
      onMouseLeave = e => {
        const { onMouseLeave } = this.props
        if (onMouseLeave) onMouseLeave(e)
        if (isTouchDevice) return
        this.setState({ isHover: false })
      }
  
      onTouchStart = e => {
        const { onTouchStart } = this.props
        if (onTouchStart) onTouchStart(e)
        if (isMouseDevice) return
        this.setState({ isHover: true })
      }
  
      onTouchEnd = e => {
        const { onTouchEnd } = this.props
        if (onTouchEnd) onTouchEnd(e)
        if (isMouseDevice) return
        this.setState({ isHover: false })
      }
  
      render() {
        const { isHover } = this.state
        const { children, className } = this.props
  
        return (
          <WrappedComponent
            {...this.props}
            className={`${isHover ? 'hover' : ''} ${className || ''}`}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
          >
            {children}
          </WrappedComponent>
        )
      }
    }
  }