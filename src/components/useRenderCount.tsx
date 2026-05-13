function useRenderCount() {
  let count = 0;
  return () => {
    count++;
    return <div>Render count:{count}</div>;
  };
}

export { useRenderCount };
