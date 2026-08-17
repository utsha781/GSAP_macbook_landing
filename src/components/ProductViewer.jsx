const ProductViewer = () => {
  return (
    <section id="product-viewer">
        <h2>Take a Closer Look.</h2>

        <div className="controls">
            <p className="info">MacbookPro 16" in Space Black</p>

            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div className="bg-neutral-300" />
                    <div className="bg-neutral-900" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default ProductViewer