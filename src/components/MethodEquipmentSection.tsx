// PLACEHOLDER — replace with real Method & Equipment content

const MethodEquipmentSection = () => {
  return (
    <section id="method" className="py-32 px-6 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Method */}
          <div className="border border-dashed border-border p-10 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
              Coming Soon
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              The Method
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Placeholder — detailed breakdown of our capture and reconstruction workflow goes here.
            </p>
            <div className="w-full mt-4 grid grid-cols-3 gap-3">
              {["Capture", "Reconstruct", "Deliver"].map((step) => (
                <div key={step} className="h-16 border border-dashed border-border flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className="border border-dashed border-border p-10 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
              Coming Soon
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Equipment
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Placeholder — camera systems, hardware, and software stack listed here.
            </p>
            <div className="w-full mt-4 grid grid-cols-2 gap-3">
              {["Cameras", "Processing", "Software", "Output"].map((cat) => (
                <div key={cat} className="h-16 border border-dashed border-border flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/50">
                    {cat}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodEquipmentSection;
