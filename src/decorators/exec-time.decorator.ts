export const execTime = (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  // do something with your method
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const finish = performance.now();
    console.log(
      `Execution time (${propertyKey}): ${finish - start} milliseconds`
    );
    return result;
  };

  return descriptor;
};
